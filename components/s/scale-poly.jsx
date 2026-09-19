import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sss_nfbgc.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/u/uirr576yi.css';
import '../../css/s/sgj9ldb8v.css';
import '../../css/y/yusdpmbxy.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="sss_nfbgc"><g class="j-npdpb0r"><path class="uirr576yi"/><path class="sgj9ldb8v"/></g><path class="yusdpmbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:scale-poly"} {...others} />);
}

export default Component;
