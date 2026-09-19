import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bywkocsmn.css';
import '../../css/t/tvvbqnhhg.css';
import '../../css/c/credxixyt.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bywkocsmn"/><circle class="tvvbqnhhg"/><path class="credxixyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-destination"} {...others} />);
}

export default Component;
