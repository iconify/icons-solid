import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co28yzgia.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/t/tifg0imgb.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="co28yzgia"/><path class="i0wzpzqff"/><path class="tifg0imgb"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-plus-48"} {...others} />);
}

export default Component;
