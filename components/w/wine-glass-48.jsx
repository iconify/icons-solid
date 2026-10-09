import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wry8nmbpn.css';
import '../../css/c/crnolnb_i.css';
import '../../css/l/lak7f2bfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wry8nmbpn"/><path class="crnolnb_i"/><path class="lak7f2bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-glass-48"} {...others} />);
}

export default Component;
