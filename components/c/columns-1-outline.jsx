import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9hr7dkaf.css';
import '../../css/x/xqgtv3btb.css';
import '../../css/t/tk5qzz68x.css';
import '../../css/e/eyxy-2mkv.css';
import '../../css/j/jp1fcbcrn.css';
import '../../css/y/ydqkcpbqr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r9hr7dkaf"/><path clip-rule="evenodd" class="xqgtv3btb"/><path class="tk5qzz68x"/><path class="eyxy-2mkv"/><path clip-rule="evenodd" class="jp1fcbcrn"/><path class="ydqkcpbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:columns-1-outline"} {...others} />);
}

export default Component;
