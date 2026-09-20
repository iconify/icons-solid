import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr11ryb_s.css';
import '../../css/d/djm234bjt.css';
import '../../css/j/j_w1x6x7q.css';
import '../../css/y/yzvpk-bem.css';
import '../../css/v/vkkqhtozr.css';
import '../../css/y/yvdug-bjk.css';
import '../../css/z/z04drlb1l.css';
import '../../css/t/tvgmy363d.css';
import '../../css/q/q3vuqsbxi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yr11ryb_s"/><path class="djm234bjt"/><path class="j_w1x6x7q"/><path class="yzvpk-bem"/><path class="vkkqhtozr"/><path class="yvdug-bjk"/><g class="z04drlb1l"><path class="tvgmy363d"/><path class="q3vuqsbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:knot"} {...others} />);
}

export default Component;
