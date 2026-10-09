import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcjwpo_yr.css';
import '../../css/k/kx_f_ebyd.css';
import '../../css/r/rqmuvbbga.css';
import '../../css/z/znx6igemc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hcjwpo_yr"/><path class="kx_f_ebyd"/><path class="rqmuvbbga"/><path class="znx6igemc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barn-48-bold"} {...others} />);
}

export default Component;
