import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xuz9anbld.css';
import '../../css/l/l587j1xqv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xuz9anbld"/><path class="l587j1xqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:chart-column"} {...others} />);
}

export default Component;
