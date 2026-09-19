import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rgp0nubmz.css';
import '../../css/x/xyfvrf3td.css';
import '../../css/w/w6xr20wbw.css';
import '../../css/p/p9b3hul9p.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rgp0nubmz"/><path class="xyfvrf3td"/><path class="w6xr20wbw"/><path class="p9b3hul9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:image-1-outline"} {...others} />);
}

export default Component;
