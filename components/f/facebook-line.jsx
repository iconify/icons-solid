import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfv4xyb3r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vfv4xyb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:facebook-line"} {...others} />);
}

export default Component;
