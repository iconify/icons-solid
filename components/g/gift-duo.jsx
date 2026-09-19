import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv-vycm8e.css';
import '../../css/d/dpjsdlepr.css';
import '../../css/t/tntq76sxu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pv-vycm8e"/><path class="dpjsdlepr"/><path class="tntq76sxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-duo"} {...others} />);
}

export default Component;
