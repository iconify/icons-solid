import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmy2czeki.css';
import '../../css/o/oo8c23mgb.css';
import '../../css/w/w94q1qbjf.css';
import '../../css/k/kto--z_xb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vmy2czeki"/><path class="oo8c23mgb"/><path class="w94q1qbjf"/><path class="kto--z_xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressed-air-48"} {...others} />);
}

export default Component;
