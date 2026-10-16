import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mby54wt2i.css';
import '../../css/p/p-azqib5q.css';
import '../../css/m/mn7eeg1uo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mby54wt2i"/><path class="p-azqib5q"/><path class="mn7eeg1uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-20"} {...others} />);
}

export default Component;
