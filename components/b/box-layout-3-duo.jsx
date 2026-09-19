import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n28yuybeb.css';
import '../../css/o/og93wpq7z.css';
import '../../css/e/eeipk_bjn.css';
import '../../css/j/j2jofiwpv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n28yuybeb"/><path clip-rule="evenodd" class="og93wpq7z"/><path class="eeipk_bjn"/><path clip-rule="evenodd" class="j2jofiwpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-3-duo"} {...others} />);
}

export default Component;
