import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv4k_bcjk.css';
import '../../css/k/kpfwnqb5i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dv4k_bcjk"/><path class="kpfwnqb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-curve-48"} {...others} />);
}

export default Component;
