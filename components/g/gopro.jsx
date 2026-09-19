import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm05irqkc.css';
import '../../css/x/xk7kdmbbm.css';
import '../../css/d/dj_gt0_ae.css';
import '../../css/m/mfu9-r3xj.css';
import '../../css/z/zq54otbvn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="zm05irqkc"/><rect class="xk7kdmbbm"/><circle class="dj_gt0_ae"/><path class="mfu9-r3xj"/><rect class="zq54otbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gopro"} {...others} />);
}

export default Component;
