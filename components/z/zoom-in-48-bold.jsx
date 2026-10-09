import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-pfn5jar.css';
import '../../css/l/lq1s_sbrc.css';
import '../../css/v/vhowmnhvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-pfn5jar"/><path class="lq1s_sbrc"/><path class="vhowmnhvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-in-48-bold"} {...others} />);
}

export default Component;
