import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/if57r5xuo.css';
import '../../css/u/uonvdubjz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="if57r5xuo"/><path class="uonvdubjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-search"} {...others} />);
}

export default Component;
