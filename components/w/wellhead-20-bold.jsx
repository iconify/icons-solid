import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mudghybxs.css';
import '../../css/r/rl1bej2cq.css';
import '../../css/e/e4fytv7eo.css';
import '../../css/p/peiacebhl.css';
import '../../css/g/g4oynsfqo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mudghybxs"/><path class="rl1bej2cq"/><path class="e4fytv7eo"/><path class="peiacebhl"/><path class="g4oynsfqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wellhead-20-bold"} {...others} />);
}

export default Component;
