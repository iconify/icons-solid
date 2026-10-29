import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hlqfty9am.css';
import '../../css/q/q1zsas24y.css';
import '../../css/b/b4x7prkcu.css';
import '../../css/t/te682eb5s.css';
import '../../css/y/yqkivob1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hlqfty9am wm-k"/><path class="q1zsas24y wm-a"/><path class="b4x7prkcu wm-shadow"/><path class="te682eb5s wm-k"/><path class="wm-a yqkivob1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chef-hat-engrave"} {...others} />);
}

export default Component;
