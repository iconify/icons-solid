import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy7xqk_um.css';
import '../../css/u/u_fdmll_m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xy7xqk_um"/><path class="u_fdmll_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sidebar-48-bold"} {...others} />);
}

export default Component;
