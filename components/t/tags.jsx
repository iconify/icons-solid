import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_5g2hi6q.css';
import '../../css/c/cu16s__pq.css';
import '../../css/v/vm5081bct.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h_5g2hi6q"/><path class="cu16s__pq"/><path clip-rule="evenodd" class="vm5081bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tags"} {...others} />);
}

export default Component;
