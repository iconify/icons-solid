import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/e/exgnwabga.css';
import '../../css/h/hcvmaqbuv.css';
import '../../css/i/i46u6tbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="rd9mw5o4z"/><path class="exgnwabga"/><circle class="hcvmaqbuv"/><path class="i46u6tbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:camera-three"} {...others} />);
}

export default Component;
