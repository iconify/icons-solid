import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpnctqbli.css';
import '../../css/r/r34dniyfc.css';
import '../../css/x/xm7b40bmo.css';
import '../../css/n/n2xfujbvx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qpnctqbli"/><path class="r34dniyfc"/><path clip-rule="evenodd" class="xm7b40bmo"/><path class="n2xfujbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:virus-duo"} {...others} />);
}

export default Component;
