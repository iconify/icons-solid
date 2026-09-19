import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz825ub8o.css';
import '../../css/k/kk86xcjkp.css';
import '../../css/z/zoqbvhk0e.css';
import '../../css/q/qc7b6fb3k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yz825ub8o"/><path class="kk86xcjkp"/><path class="zoqbvhk0e"/><path class="qc7b6fb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crosshairs-1-duo"} {...others} />);
}

export default Component;
