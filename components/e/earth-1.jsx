import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw8p2oi9f.css';
import '../../css/j/jd4u2jbej.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/q-fg43bcc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jw8p2oi9f"/><path clip-rule="evenodd" class="jd4u2jbej"/><path class="xjfc-xbtr"/><path class="q-fg43bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:earth-1"} {...others} />);
}

export default Component;
