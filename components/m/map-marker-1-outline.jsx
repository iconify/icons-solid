import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n7cp5yjmv.css';
import '../../css/w/w1y7w7bpk.css';
import '../../css/u/ua6bxzbzs.css';
import '../../css/e/ek70m4tim.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n7cp5yjmv"/><path class="w1y7w7bpk"/><path class="ua6bxzbzs"/><path class="ek70m4tim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-marker-1-outline"} {...others} />);
}

export default Component;
