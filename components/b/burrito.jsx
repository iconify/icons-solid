import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo2pjlbuq.css';
import '../../css/z/z6_0a-xar.css';
import '../../css/s/sh06pyamp.css';
import '../../css/g/grrjqr17d.css';
import '../../css/j/jgn_xv7ha.css';
import '../../css/o/olc-2bfqz.css';
import '../../css/j/jkt4_jbxr.css';
import '../../css/s/s_lerhzvq.css';
import '../../css/o/o40akmbrb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vo2pjlbuq"/><path class="z6_0a-xar"/><path class="sh06pyamp"/><path class="grrjqr17d"/><path class="jgn_xv7ha"/><path class="olc-2bfqz"/><path class="jkt4_jbxr"/><path class="s_lerhzvq"/><path class="o40akmbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:burrito"} {...others} />);
}

export default Component;
