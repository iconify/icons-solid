import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulipixb_y.css';
import '../../css/c/cl9z5d_3w.css';
import '../../css/h/hsahbabwh.css';
import '../../css/a/aizck2ejj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ulipixb_y"/><path class="cl9z5d_3w"/><path class="hsahbabwh"/><path class="aizck2ejj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opencv-wordmark"} {...others} />);
}

export default Component;
