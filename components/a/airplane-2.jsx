import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ed79v0bnq.css';
import '../../css/o/otkj6bm5u.css';
import '../../css/r/r5o5b2bfd.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 1)" class="n1lsf0bnc"><ellipse class="ed79v0bnq"/><path class="otkj6bm5u"/><path class="r5o5b2bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:airplane-2"} {...others} />);
}

export default Component;
