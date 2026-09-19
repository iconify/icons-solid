import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8avjbd1d.css';
import '../../css/n/nicn_dwwh.css';
import '../../css/q/qvppyhxrp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x8avjbd1d"/><path clip-rule="evenodd" class="nicn_dwwh"/><path class="qvppyhxrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-oceania-bold"} {...others} />);
}

export default Component;
