import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2ba5-pbd.css';
import '../../css/q/q5rlp5b7c.css';
import '../../css/h/hpd68bcyy.css';
import '../../css/h/h22zyogkq.css';
import '../../css/w/wodo_k5aw.css';
import '../../css/e/ei497mvhn.css';
import '../../css/l/lpju2-b5y.css';
import '../../css/g/gvw7hd7zt.css';
import '../../css/x/xm7j_pbml.css';
import '../../css/f/f2wiedbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q2ba5-pbd wm-a"/><path class="q5rlp5b7c wm-a"/><path class="hpd68bcyy wm-a"/><path class="h22zyogkq wm-k"/><path class="wm-k wodo_k5aw"/><path class="ei497mvhn wm-k"/><path class="lpju2-b5y wm-shine"/><path class="gvw7hd7zt wm-s"/><path class="wm-s xm7j_pbml"/><path class="f2wiedbjs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:flip-horizontal"} {...others} />);
}

export default Component;
