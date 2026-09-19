import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/det8czbfr.css';
import '../../css/x/xz99htbfe.css';
import '../../css/z/z5ah-lkxn.css';
import '../../css/q/q3q2igs4y.css';
import '../../css/r/rchl7zb8t.css';
import '../../css/e/endbq-bnv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="det8czbfr"/><path class="xz99htbfe"/><path class="z5ah-lkxn"/><path class="q3q2igs4y"/><path class="rchl7zb8t"/><path class="endbq-bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:floppy-disk"} {...others} />);
}

export default Component;
