import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m9569c2lu.css';
import '../../css/n/noetay_uo.css';
import '../../css/v/vb0af0blw.css';
import '../../css/l/lbb4fzhgj.css';
import '../../css/m/m6cnbnbyl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><rect class="m9569c2lu"/><path class="noetay_uo"/><rect class="vb0af0blw"/><rect class="lbb4fzhgj"/><path class="m6cnbnbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-bold"} {...others} />);
}

export default Component;
