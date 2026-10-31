import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/o/o0qoxsbpt.css';
import '../../css/q/qlcr37obw.css';
import '../../css/m/me9pg9l_x.css';
import '../../css/o/o6o-hacjf.css';
import '../../css/j/jh_s7jysg.css';
import '../../css/o/ohqa_ib5g.css';
import '../../css/a/anz9nz28i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="o0qoxsbpt"/><path class="qlcr37obw"/><path class="me9pg9l_x"/><path class="o6o-hacjf"/><path class="jh_s7jysg"/><path class="ohqa_ib5g"/><path class="anz9nz28i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:podium-pop"} {...others} />);
}

export default Component;
