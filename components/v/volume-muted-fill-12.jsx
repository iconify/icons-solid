import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzz3twymt.css';
import '../../css/p/p8lu4nblm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="rzz3twymt"/><path class="p8lu4nblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-muted-fill-12"} {...others} />);
}

export default Component;
