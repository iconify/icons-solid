import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njfbj4esg.css';
import '../../css/d/dpptcnn_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njfbj4esg"/><path class="dpptcnn_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:stopwatch"} {...others} />);
}

export default Component;
