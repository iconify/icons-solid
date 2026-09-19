import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvso0xkag.css';
import '../../css/k/kjqdupayv.css';
import '../../css/e/enuv5c5hl.css';
import '../../css/o/or8d6g67s.css';
import '../../css/h/htlnsbcxa.css';
import '../../css/l/lkbnzpjnn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><rect class="gvso0xkag"/><rect class="kjqdupayv"/><path class="enuv5c5hl"/><path class="or8d6g67s"/><path class="htlnsbcxa"/><path class="lkbnzpjnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:envelope-with-arrow"} {...others} />);
}

export default Component;
