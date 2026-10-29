import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hufrt6b0t.css';
import '../../css/q/q0wgicc6g.css';
import '../../css/k/kwopvubne.css';
import '../../css/a/abiajunvt.css';
import '../../css/c/cdklgbbvj.css';
import '../../css/t/t2d_x3brs.css';
import '../../css/e/e3kruu6qp.css';
import '../../css/f/fkkoz_btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hufrt6b0t wm-shadow"/><path class="q0wgicc6g"/><path class="kwopvubne"/><path class="abiajunvt"/><path class="cdklgbbvj"/><path class="t2d_x3brs"/><path class="e3kruu6qp"/><path class="fkkoz_btt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-bar-increasing"} {...others} />);
}

export default Component;
