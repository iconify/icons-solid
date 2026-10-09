import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvmh4mb4l.css';
import '../../css/s/s0fmfdclg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mvmh4mb4l"/><path class="s0fmfdclg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-price-20"} {...others} />);
}

export default Component;
