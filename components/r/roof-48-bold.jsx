import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2mlpnqnh.css';
import '../../css/d/d7knfxo3n.css';
import '../../css/k/kbe1bit3g.css';
import '../../css/p/pne_1mbrk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f2mlpnqnh"/><path class="d7knfxo3n"/><path class="kbe1bit3g"/><path class="pne_1mbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roof-48-bold"} {...others} />);
}

export default Component;
