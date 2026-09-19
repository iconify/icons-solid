import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdrrxqbio.css';
import '../../css/p/po0uuiouq.css';
import '../../css/a/a_nlxibcr.css';
import '../../css/r/rd_-cebxb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mdrrxqbio"/><path clip-rule="evenodd" class="po0uuiouq"/><path class="a_nlxibcr"/><path class="rd_-cebxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:day-outline"} {...others} />);
}

export default Component;
