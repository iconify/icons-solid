import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt8xwbbsb.css';
import '../../css/a/aj9_10d2s.css';
import '../../css/h/hyvw0_owe.css';
import '../../css/o/o1jpsm7ux.css';
import '../../css/r/rdv1nzp9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zt8xwbbsb"/><path class="aj9_10d2s"/><path class="hyvw0_owe"/><path class="o1jpsm7ux"/><path class="rdv1nzp9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-swap-48"} {...others} />);
}

export default Component;
