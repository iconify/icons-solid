import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4csvlige.css';
import '../../css/y/y--a8-brh.css';
import '../../css/j/jap_-fj2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4csvlige"/><path class="y--a8-brh"/><path class="jap_-fj2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:earth-sharp"} {...others} />);
}

export default Component;
