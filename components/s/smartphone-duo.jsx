import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk1qekz2p.css';
import '../../css/o/ofjjljbxm.css';
import '../../css/w/wgkdo3b1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pk1qekz2p"/><path class="ofjjljbxm"/><path class="wgkdo3b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-duo"} {...others} />);
}

export default Component;
