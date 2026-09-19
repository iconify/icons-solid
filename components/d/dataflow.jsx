import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-xfx0--c.css';
import '../../css/r/rh8c3ebwc.css';
import '../../css/c/cno8mibya.css';
import '../../css/j/j-z6uxaiv.css';
import '../../css/l/lpq07b7vu.css';
import '../../css/k/kksfhgb6i.css';
import '../../css/o/oy0lgf6kv.css';
import '../../css/y/y5fqsh5vy.css';
import '../../css/c/cx1sy1brb.css';
import '../../css/s/sc___2b_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-xfx0--c"/><path class="rh8c3ebwc"/><path class="cno8mibya"/><path class="j-z6uxaiv"/><path class="lpq07b7vu"/><path class="kksfhgb6i"/><circle class="oy0lgf6kv"/><circle class="y5fqsh5vy"/><circle class="cx1sy1brb"/><circle class="sc___2b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:dataflow"} {...others} />);
}

export default Component;
