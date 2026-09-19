import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2-dhib-k.css';
import '../../css/m/m-jpowjto.css';
import '../../css/s/sge2yqvow.css';
import '../../css/r/r6cwfbc4d.css';
import '../../css/z/zc22l2qtv.css';
import '../../css/x/x7vox_tlt.css';
import '../../css/q/q84k93o1u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d2-dhib-k"/><path class="m-jpowjto"/><path class="sge2yqvow"/><path class="r6cwfbc4d"/><path class="zc22l2qtv"/><path class="x7vox_tlt"/><path class="q84k93o1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cigarette"} {...others} />);
}

export default Component;
