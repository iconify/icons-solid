import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iijf-xhei.css';
import '../../css/f/fymhgdcpr.css';
import '../../css/z/z9921wm3q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="iijf-xhei"/><path class="fymhgdcpr"/><path class="z9921wm3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microphone-2-duo"} {...others} />);
}

export default Component;
