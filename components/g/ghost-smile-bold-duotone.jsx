import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rai4yqb2e.css';
import '../../css/b/bwuhri6fh.css';
import '../../css/m/msv3b6bmh.css';
import '../../css/k/khc4xk74b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rai4yqb2e"/><path class="bwuhri6fh"/><path class="msv3b6bmh"/><path class="khc4xk74b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-smile-bold-duotone"} {...others} />);
}

export default Component;
