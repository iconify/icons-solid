import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khjcesbpn.css';
import '../../css/s/s-u82krba.css';
import '../../css/k/k00q12jpk.css';
import '../../css/h/hzo9elbjr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="khjcesbpn"/><path class="s-u82krba"/><path class="k00q12jpk"/><path class="hzo9elbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gold"} {...others} />);
}

export default Component;
