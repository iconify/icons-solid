import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf2mm_--c.css';
import '../../css/k/kr_fs7b3w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tf2mm_--c"/><path class="kr_fs7b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickaxe-48"} {...others} />);
}

export default Component;
