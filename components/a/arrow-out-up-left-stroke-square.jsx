import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j082ynusa.css';
import '../../css/l/lqhgtqdtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j082ynusa"/><path class="lqhgtqdtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-left-stroke-square"} {...others} />);
}

export default Component;
