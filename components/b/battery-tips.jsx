import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezl868bnv.css';
import '../../css/o/o79l_2b7k.css';
import '../../css/k/kuhj0_b1o.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="ezl868bnv"/><path class="o79l_2b7k"/><path class="kuhj0_b1o"/><circle transform="matrix(0 -1 -1 0 24 34)" class="k1uq304yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:battery-tips"} {...others} />);
}

export default Component;
