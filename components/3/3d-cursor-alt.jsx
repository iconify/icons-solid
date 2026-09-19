import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihfx8m51v.css';
import '../../css/w/wm1h11yoe.css';
import '../../css/n/nnrx8kbgf.css';
import '../../css/s/sv9kyvbqr.css';
import '../../css/t/tpupr4s0v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ihfx8m51v"/><path class="wm1h11yoe"/><path class="nnrx8kbgf"/><path class="sv9kyvbqr"/><path class="tpupr4s0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-cursor-alt"} {...others} />);
}

export default Component;
