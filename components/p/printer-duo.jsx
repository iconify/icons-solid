import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xy07pe4cu.css';
import '../../css/a/a7zornbiy.css';
import '../../css/t/t5e808btk.css';
import '../../css/l/lpqj20mmv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xy07pe4cu"/><path class="a7zornbiy"/><path class="t5e808btk"/><path class="lpqj20mmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:printer-duo"} {...others} />);
}

export default Component;
