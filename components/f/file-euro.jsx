import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f41w83s2w.css';
import '../../css/r/rl4zu8qob.css';
import '../../css/e/ehx0rebpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f41w83s2w"/><path class="rl4zu8qob"/><path class="ehx0rebpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-euro"} {...others} />);
}

export default Component;
