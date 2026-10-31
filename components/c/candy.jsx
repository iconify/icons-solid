import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r_2a6pb6g.css';
import '../../css/c/cgcn59-os.css';
import '../../css/h/h-2zx7tns.css';
import '../../css/x/xyo76xrmw.css';
import '../../css/o/o0hunelfk.css';
import '../../css/e/efmg97bgl.css';
import '../../css/l/lw5z3nbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r_2a6pb6g"/><path class="cgcn59-os"/><path class="h-2zx7tns wm-shine"/><path class="xyo76xrmw"/><path class="o0hunelfk"/><path class="efmg97bgl"/><path class="lw5z3nbwu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:candy"} {...others} />);
}

export default Component;
