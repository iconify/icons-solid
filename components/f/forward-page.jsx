import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vh4j1o_hv.css';
import '../../css/x/xxvu36blw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vh4j1o_hv"/><path class="xxvu36blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:forward-page"} {...others} />);
}

export default Component;
