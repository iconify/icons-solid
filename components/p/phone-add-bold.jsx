import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu7qyy4za.css';
import '../../css/a/a4g_h2opr.css';
import '../../css/x/xyijo7zcq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu7qyy4za"/><path class="a4g_h2opr"/><path class="xyijo7zcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:phone-add-bold"} {...others} />);
}

export default Component;
