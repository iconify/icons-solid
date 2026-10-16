import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2mjsubix.css';
import '../../css/e/e_l_xltow.css';
import '../../css/k/ksirhhagl.css';
import '../../css/h/hwl24odwp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2mjsubix"/><path class="e_l_xltow"/><path class="ksirhhagl"/><path class="hwl24odwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-environment-48-bold"} {...others} />);
}

export default Component;
