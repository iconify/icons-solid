import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/po0mzybme.css';
import '../../css/e/exw9tltic.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="po0mzybme"/><path class="exw9tltic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:curtain"} {...others} />);
}

export default Component;
