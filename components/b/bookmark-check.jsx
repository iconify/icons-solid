import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p2sajfbyc.css';
import '../../css/f/fh73agb2c.css';
import '../../css/h/hzmehsbgq.css';
import '../../css/z/z8ggteb9n.css';
import '../../css/o/onpa4mb-o.css';
import '../../css/m/mgojbb50q.css';
import '../../css/e/e92bi5brv.css';
import '../../css/j/j861yycpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p2sajfbyc"/><path class="fh73agb2c"/><path class="hzmehsbgq wm-shine"/><path class="wm-k z8ggteb9n"/><path class="onpa4mb-o wm-a"/><path class="mgojbb50q"/><path class="e92bi5brv"/><path class="j861yycpw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bookmark-check"} {...others} />);
}

export default Component;
