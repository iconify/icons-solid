import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bv45cu70d.css';
import '../../css/m/mgrc7zb-j.css';
import '../../css/x/x51wmgiym.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bv45cu70d"/><path clip-rule="evenodd" class="mgrc7zb-j"/><path class="x51wmgiym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sofa"} {...others} />);
}

export default Component;
