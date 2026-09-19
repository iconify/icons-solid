import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/q/q2fz3gsra.css';
import '../../css/f/fu9l_wgqv.css';
import '../../css/r/r64xafosv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><path class="q2fz3gsra"/><rect class="fu9l_wgqv"/><rect class="r64xafosv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:layout-1"} {...others} />);
}

export default Component;
