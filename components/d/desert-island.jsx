import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul1klabpw.css';
import '../../css/c/cdnlc083p.css';
import '../../css/x/xtsw08b-e.css';
import '../../css/i/iw-r3fb9w.css';
import '../../css/w/wddimfb2l.css';
import '../../css/h/h3ex0nbpz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ul1klabpw"/><path class="cdnlc083p"/><path class="xtsw08b-e"/><path class="iw-r3fb9w"/><path class="wddimfb2l"/><path class="h3ex0nbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:desert-island"} {...others} />);
}

export default Component;
