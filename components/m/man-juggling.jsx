import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnr0ks-xv.css';
import '../../css/c/c2ylrm5xk.css';
import '../../css/b/bob2tfbvw.css';
import '../../css/n/nw5r7jbvy.css';
import '../../css/n/n1b5xqb_u.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="tnr0ks-xv"/><path class="c2ylrm5xk"/><path class="bob2tfbvw"/><path class="nw5r7jbvy"/><path class="n1b5xqb_u"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-juggling"} {...others} />);
}

export default Component;
