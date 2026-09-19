import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyyqn4wxr.css';
import '../../css/y/yuqpybceb.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="vyyqn4wxr"/><path class="yuqpybceb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-trim-filled"} {...others} />);
}

export default Component;
