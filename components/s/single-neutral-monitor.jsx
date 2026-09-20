import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5vufdbki.css';
import '../../css/x/x_ul5vbxd.css';
import '../../css/t/tjubuib4d.css';
import '../../css/o/o7pl_jkep.css';
import '../../css/o/of0tg_klo.css';
import '../../css/o/omrkagoin.css';
import '../../css/a/abjeh1boc.css';
import '../../css/j/jiv-qj67w.css';
import '../../css/j/jj14awbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d5vufdbki"/><path class="x_ul5vbxd"/><path class="tjubuib4d"/><path class="o7pl_jkep"/><path class="of0tg_klo"/><path class="omrkagoin"/><path class="abjeh1boc"/><path class="jiv-qj67w"/><path class="jj14awbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-neutral-monitor"} {...others} />);
}

export default Component;
