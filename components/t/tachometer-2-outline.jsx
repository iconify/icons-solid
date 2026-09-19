import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g83c24bxt.css';
import '../../css/y/yt3sru-9s.css';
import '../../css/s/sw2oztbzt.css';
import '../../css/s/sbj1scywh.css';
import '../../css/l/l4rb_ediz.css';
import '../../css/q/q4_nr4btq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g83c24bxt"/><path clip-rule="evenodd" class="yt3sru-9s"/><path class="sw2oztbzt"/><path clip-rule="evenodd" class="sbj1scywh"/><path clip-rule="evenodd" class="l4rb_ediz"/><path class="q4_nr4btq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-2-outline"} {...others} />);
}

export default Component;
