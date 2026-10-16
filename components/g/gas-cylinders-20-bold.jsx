import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfoxxnbix.css';
import '../../css/z/zuy0ej7sv.css';
import '../../css/j/jkf-brbbz.css';
import '../../css/v/vfj0pcb0d.css';
import '../../css/g/gdfcahtup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yfoxxnbix"/><path class="zuy0ej7sv"/><path class="jkf-brbbz"/><path class="vfj0pcb0d"/><path class="gdfcahtup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-cylinders-20-bold"} {...others} />);
}

export default Component;
