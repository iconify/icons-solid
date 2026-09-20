import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4hcqyb8d.css';
import '../../css/d/dyzzuq37t.css';
import '../../css/l/lb_ybsd9c.css';
import '../../css/z/zvt4n2b_e.css';
import '../../css/u/u5z423b3z.css';
import '../../css/k/ky0dgsb8s.css';
import '../../css/u/up60f3mas.css';
import '../../css/v/vmxgcwq1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w4hcqyb8d"/><path class="dyzzuq37t"/><path class="lb_ybsd9c"/><path class="zvt4n2b_e"/><path class="u5z423b3z"/><path class="ky0dgsb8s"/><path class="up60f3mas"/><path class="vmxgcwq1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:trends-torch"} {...others} />);
}

export default Component;
