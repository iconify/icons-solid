import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxp_ne7lq.css';
import '../../css/i/ik8lqcbnd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mxp_ne7lq"/><path clip-rule="evenodd" class="ik8lqcbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:drumkit-16"} {...others} />);
}

export default Component;
