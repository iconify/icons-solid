import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f3i48zlop.css';
import '../../css/v/vn7k32bvs.css';
import '../../css/w/wt6q7nbgv.css';
import '../../css/q/quy7-c9io.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="f3i48zlop wm-deco"/><path class="vn7k32bvs wm-deco"/><path class="wt6q7nbgv"/><path class="quy7-c9io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-blueprint"} {...others} />);
}

export default Component;
