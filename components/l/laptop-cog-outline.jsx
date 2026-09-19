import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knrnv_33u.css';
import '../../css/u/ub4lowbdm.css';
import '../../css/t/tb6awyqzo.css';
import '../../css/z/z9c2rqbly.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="knrnv_33u"/><path clip-rule="evenodd" class="ub4lowbdm"/><path clip-rule="evenodd" class="tb6awyqzo"/><path class="z9c2rqbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-cog-outline"} {...others} />);
}

export default Component;
