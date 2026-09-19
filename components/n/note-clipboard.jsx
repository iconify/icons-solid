import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6hlmh-yv.css';
import '../../css/h/hcj_rqbfu.css';
import '../../css/f/f2xtp8k_j.css';
import '../../css/m/m-r32nl1u.css';
import '../../css/u/uzxdi4bph.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6hlmh-yv"/><path class="hcj_rqbfu"/><rect class="f2xtp8k_j"/><rect class="m-r32nl1u"/><path class="uzxdi4bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:note-clipboard"} {...others} />);
}

export default Component;
