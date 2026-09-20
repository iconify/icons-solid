import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxql1ybdk.css';
import '../../css/v/vy-3i3bog.css';
import '../../css/n/nj3duacxn.css';
import '../../css/m/mghehjbdd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oxql1ybdk"/><path clip-rule="evenodd" class="vy-3i3bog"/><path class="nj3duacxn"/><path class="mghehjbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:business-card"} {...others} />);
}

export default Component;
