import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp7kpjbjg.css';
import '../../css/z/zf-lp8lsg.css';
import '../../css/y/y46qu_1vk.css';
import '../../css/a/a7g0fv7yr.css';
import '../../css/g/gho0sybpp.css';
import '../../css/n/nvzcjsb0v.css';
import '../../css/r/rez_ggbzk.css';
import '../../css/p/p_vwir9_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kp7kpjbjg"/><path class="zf-lp8lsg"/><path class="y46qu_1vk"/><path class="a7g0fv7yr"/><path class="gho0sybpp"/><path class="nvzcjsb0v"/><circle class="rez_ggbzk"/><circle class="p_vwir9_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:businesswoman"} {...others} />);
}

export default Component;
