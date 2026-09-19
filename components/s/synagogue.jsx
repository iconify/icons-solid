import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbegxlbom.css';
import '../../css/c/c5vo36b2v.css';
import '../../css/m/mbtpddbok.css';
import '../../css/k/kw88zxb8n.css';
import '../../css/z/zx0k85hea.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zbegxlbom"/><path class="c5vo36b2v"/><path class="mbtpddbok"/><path class="kw88zxb8n"/><path class="zx0k85hea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:synagogue"} {...others} />);
}

export default Component;
