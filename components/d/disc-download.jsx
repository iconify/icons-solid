import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rs-trobto.css';
import '../../css/y/ya7syfezh.css';
import '../../css/i/i0yqupb1j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rs-trobto"/><path class="ya7syfezh"/><path class="i0yqupb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:disc-download"} {...others} />);
}

export default Component;
