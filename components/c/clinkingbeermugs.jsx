import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u53ewsbpz.css';
import '../../css/b/bb3hrhbnl.css';
import '../../css/t/ts_melbms.css';
import '../../css/x/xix4a2upr.css';
import '../../css/j/jftus9b_e.css';
import '../../css/p/p7t1d1z9w.css';
import '../../css/f/ft3003buj.css';
import '../../css/v/vruwbxgel.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u53ewsbpz"/><path class="bb3hrhbnl"/><path class="ts_melbms"/><path class="xix4a2upr"/><path class="jftus9b_e"/><path class="p7t1d1z9w"/><path class="ft3003buj"/><path class="vruwbxgel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clinkingbeermugs"} {...others} />);
}

export default Component;
