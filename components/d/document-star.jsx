import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a2yfxybja.css';
import '../../css/j/jnu_rvr7k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="a2yfxybja"/><path class="jnu_rvr7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-star"} {...others} />);
}

export default Component;
