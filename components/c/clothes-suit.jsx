import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r14m0_bwd.css';
import '../../css/u/u9_1s46cx.css';
import '../../css/n/nx184z37n.css';
import '../../css/x/x_pultk6y.css';
import '../../css/f/fojq0r_ej.css';
import '../../css/s/sq9tz90tm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r14m0_bwd"/><path class="u9_1s46cx"/><path class="nx184z37n"/><path class="x_pultk6y"/><path class="fojq0r_ej"/><path class="sq9tz90tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-suit"} {...others} />);
}

export default Component;
