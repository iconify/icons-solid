import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pf4pa1bsm.css';
import '../../css/b/b9gesmbow.css';
import '../../css/l/l_ox2fgog.css';
import '../../css/r/rapb4wc6p.css';
import '../../css/j/j0wjv4bfx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/ug1ixiawc.css';
import '../../css/h/hy1ur8bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pf4pa1bsm"/><path class="b9gesmbow"/><path class="l_ox2fgog"/><path class="rapb4wc6p"/><path class="j0wjv4bfx"/><g class="mc2zb0bvp"><path class="ug1ixiawc"/><path class="hy1ur8bdq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-bold-duotone"} {...others} />);
}

export default Component;
