import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/p/pindlwb8x.css';
import '../../css/r/r52t-g43b.css';
import '../../css/f/fg4i1pbnb.css';
import '../../css/f/fv76q6biy.css';
import '../../css/u/u9tok336c.css';
import '../../css/q/q-h6j5bgy.css';
import '../../css/t/t7di3wypd.css';
import '../../css/t/tiprigbrj.css';
import '../../css/t/ts0fu1bql.css';
import '../../css/v/v_c36bbnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="pindlwb8x"/><path class="r52t-g43b"/><path class="fg4i1pbnb"/><path class="fv76q6biy"/><path class="u9tok336c"/><path class="q-h6j5bgy"/><path class="t7di3wypd"/><path class="tiprigbrj"/><path class="ts0fu1bql"/><path class="v_c36bbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:ufo"} {...others} />);
}

export default Component;
