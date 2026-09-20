import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3d3g4b4z.css';
import '../../css/s/sjnwlgb-x.css';
import '../../css/f/ff54ufbyq.css';
import '../../css/w/wrgkcbcge.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i3d3g4b4z"/><path class="sjnwlgb-x"/><path class="ff54ufbyq"/><path class="wrgkcbcge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:target"} {...others} />);
}

export default Component;
