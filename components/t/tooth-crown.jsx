import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yegbfabpy.css';
import '../../css/y/y5fi52suu.css';
import '../../css/i/inhl4q0dk.css';
import '../../css/s/se6v6ybwa.css';
import '../../css/c/chj7csoxo.css';
import '../../css/l/lx_jpu01q.css';
import '../../css/l/leln-mbqw.css';
import '../../css/g/gp_l5rvns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yegbfabpy"/><path class="wm-k y5fi52suu"/><path class="inhl4q0dk wm-k"/><path class="se6v6ybwa wm-shine"/><path class="chj7csoxo wm-a"/><path class="lx_jpu01q wm-a"/><path class="leln-mbqw wm-a"/><path class="gp_l5rvns wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:tooth-crown"} {...others} />);
}

export default Component;
