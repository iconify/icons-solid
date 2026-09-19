import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efb2s37wt.css';
import '../../css/o/ocyd4bb0x.css';
import '../../css/p/piya6qlkm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="efb2s37wt"/><path class="ocyd4bb0x"/><path class="piya6qlkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-mostly-outline"} {...others} />);
}

export default Component;
