import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jnu_rvr7k.css';
import '../../css/o/o8aml84oh.css';
import '../../css/m/mmaa3u7my.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="jnu_rvr7k"/><path class="o8aml84oh"/><path class="mmaa3u7my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-checked"} {...others} />);
}

export default Component;
