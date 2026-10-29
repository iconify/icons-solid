import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro55v4bnb.css';
import '../../css/v/vqvaan0eq.css';
import '../../css/m/m5rzxhctd.css';
import '../../css/f/f70pr-bpe.css';
import '../../css/w/wekzsrbcw.css';
import '../../css/j/j1393bc7m.css';
import '../../css/b/bq1y8qtjm.css';
import '../../css/u/uqs6mtcut.css';
import '../../css/j/jitem21bj.css';
import '../../css/f/fvwyw0w6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro55v4bnb wm-shadow"/><path class="vqvaan0eq wm-k"/><path class="m5rzxhctd wm-k"/><path class="f70pr-bpe wm-k"/><path class="wekzsrbcw wm-k"/><path class="j1393bc7m wm-k"/><path class="bq1y8qtjm wm-shine"/><path class="uqs6mtcut wm-a"/><path class="jitem21bj wm-s"/><path class="fvwyw0w6i wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:clock-alert"} {...others} />);
}

export default Component;
