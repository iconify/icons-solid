import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxjt1bbjd.css';
import '../../css/k/k_ivpjbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lxjt1bbjd"/><path class="k_ivpjbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pie-chart-alt-filled"} {...others} />);
}

export default Component;
