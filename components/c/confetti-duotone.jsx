import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1v1_s84d.css';
import '../../css/h/hpmlkvbdc.css';
import '../../css/g/g1eanaczg.css';
import '../../css/v/v0os00q9g.css';
import '../../css/e/e7t5ixugi.css';
import '../../css/l/lql4b1y7n.css';
import '../../css/c/c2lbokb9y.css';
import '../../css/j/japywmblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j1v1_s84d"/><path class="hpmlkvbdc"/><path clip-rule="evenodd" class="g1eanaczg"/><path class="v0os00q9g"/><path class="e7t5ixugi"/><path class="lql4b1y7n"/><path class="c2lbokb9y"/><path class="japywmblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:confetti-duotone"} {...others} />);
}

export default Component;
