import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4-kcfbnx.css';
import '../../css/o/o-uvx-bbx.css';
import '../../css/i/ihh_jhb-n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="u4-kcfbnx"/><path class="o-uvx-bbx"/><path class="ihh_jhb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy-2-duo"} {...others} />);
}

export default Component;
