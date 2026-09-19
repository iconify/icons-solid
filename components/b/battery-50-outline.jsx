import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg96irb-q.css';
import '../../css/b/bm3ps4bdp.css';
import '../../css/a/a2kumftht.css';
import '../../css/o/owgj5rxcv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rg96irb-q"/><path clip-rule="evenodd" class="bm3ps4bdp"/><path class="a2kumftht"/><path clip-rule="evenodd" class="owgj5rxcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-50-outline"} {...others} />);
}

export default Component;
