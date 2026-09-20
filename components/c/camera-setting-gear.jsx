import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjjjf8bub.css';
import '../../css/f/f447rebnc.css';
import '../../css/l/l_0xm7_ni.css';
import '../../css/m/mpcut7b9m.css';
import '../../css/l/lk4csh0px.css';
import '../../css/a/anobtrcyn.css';
import '../../css/s/s116gnjfo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zjjjf8bub"/><path class="f447rebnc"/><path class="l_0xm7_ni"/><path class="mpcut7b9m"/><path class="lk4csh0px"/><path class="anobtrcyn"/><path class="s116gnjfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:camera-setting-gear"} {...others} />);
}

export default Component;
