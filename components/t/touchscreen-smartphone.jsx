import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktvza_ycb.css';
import '../../css/a/ajbc88bet.css';
import '../../css/u/u9db6-ydy.css';
import '../../css/u/uh37wcbdm.css';
import '../../css/s/sj2xbacse.css';
import '../../css/u/uo0cwrbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ktvza_ycb"/><path class="ajbc88bet"/><circle class="u9db6-ydy"/><circle class="uh37wcbdm"/><circle class="sj2xbacse"/><circle class="uo0cwrbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:touchscreen-smartphone"} {...others} />);
}

export default Component;
