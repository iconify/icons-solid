import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ya2a54bmq.css';
import '../../css/b/bxno3kbwv.css';
import '../../css/f/fs60ylbav.css';
import '../../css/d/d_jznpbnb.css';
import '../../css/n/n_k5foxfv.css';
import '../../css/c/cy3plyxvp.css';
import '../../css/x/xlhwd5bco.css';
import '../../css/f/f4tt48bpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><ellipse class="ya2a54bmq"/><path class="bxno3kbwv"/><path class="fs60ylbav"/><path class="d_jznpbnb"/><path class="n_k5foxfv"/><ellipse class="cy3plyxvp"/><path class="xlhwd5bco"/><path class="f4tt48bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:funds"} {...others} />);
}

export default Component;
