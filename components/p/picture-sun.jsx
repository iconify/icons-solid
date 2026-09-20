import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk97chxyu.css';
import '../../css/i/iglcvjj1g.css';
import '../../css/s/ster7f3pr.css';
import '../../css/n/n48t7tgzj.css';
import '../../css/u/uc8n0eb5r.css';
import '../../css/l/lp_e5obie.css';
import '../../css/e/e_8tv12gb.css';
import '../../css/f/f19n9pbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wk97chxyu"/><path class="iglcvjj1g"/><path class="ster7f3pr"/><path class="n48t7tgzj"/><path class="uc8n0eb5r"/><path class="lp_e5obie"/><path class="e_8tv12gb"/><path class="f19n9pbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:picture-sun"} {...others} />);
}

export default Component;
