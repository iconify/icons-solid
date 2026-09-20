import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbegeubyk.css';
import '../../css/s/sc871acwu.css';
import '../../css/x/xskigzbsf.css';
import '../../css/c/cmw57vbln.css';
import '../../css/c/clztutb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbegeubyk"/><path class="sc871acwu"/><path class="xskigzbsf"/><path class="cmw57vbln"/><path class="clztutb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:programming-hold-code-2"} {...others} />);
}

export default Component;
