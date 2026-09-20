import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/l/laigpzugj.css';
import '../../css/l/lcf1j3b0f.css';
import '../../css/z/zv5l_299s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="laigpzugj"/><path class="lcf1j3b0f"/><path class="zv5l_299s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:steering-wheel-duo"} {...others} />);
}

export default Component;
