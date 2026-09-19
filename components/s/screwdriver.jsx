import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_rn3obdo.css';
import '../../css/m/m4i19tyoh.css';
import '../../css/x/x94spybsx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i_rn3obdo"/><path class="m4i19tyoh"/><path class="x94spybsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:screwdriver"} {...others} />);
}

export default Component;
