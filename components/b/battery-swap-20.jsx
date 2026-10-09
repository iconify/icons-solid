import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lma-9b7ei.css';
import '../../css/k/ki6vv-b4z.css';
import '../../css/o/om_n_ebsy.css';
import '../../css/f/f_ct1n54q.css';
import '../../css/j/jt0uzybsk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lma-9b7ei"/><path class="ki6vv-b4z"/><path class="om_n_ebsy"/><path class="f_ct1n54q"/><path class="jt0uzybsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-swap-20"} {...others} />);
}

export default Component;
