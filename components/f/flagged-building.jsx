import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5_4hn5in.css';
import '../../css/d/d1fei8prm.css';
import '../../css/y/yg56u96kd.css';
import '../../css/t/t-70k9bkx.css';
import '../../css/e/es5nvkbsl.css';
import '../../css/z/z04drlb1l.css';
import '../../css/m/myn56wbjw.css';
import '../../css/b/bk9ljcbut.css';
import '../../css/y/y3n6-4-dw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t5_4hn5in"/><path class="d1fei8prm"/><path class="yg56u96kd"/><path class="t-70k9bkx"/><path class="es5nvkbsl"/><g class="z04drlb1l"><path class="myn56wbjw"/><path class="bk9ljcbut"/><path class="y3n6-4-dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flagged-building"} {...others} />);
}

export default Component;
