import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jilftibdi.css';
import '../../css/t/tp3zyeb1a.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pfz_m4bgm.css';
import '../../css/u/ujlk92plo.css';
import '../../css/y/yyyzh212f.css';
import '../../css/a/anwwiub6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jilftibdi"/><path class="tp3zyeb1a"/><g class="xtpeb-edw"><path class="pfz_m4bgm"/><path class="ujlk92plo"/><path class="yyyzh212f"/><path class="anwwiub6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-bold-duotone"} {...others} />);
}

export default Component;
