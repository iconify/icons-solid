import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xk8abgb-z.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';
import '../../css/h/h6phtxo0h.css';
import '../../css/w/wn7dqvbng.css';
import '../../css/k/kq1mxjxmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xk8abgb-z"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/><path class="h6phtxo0h"/><path class="wn7dqvbng"/><path class="kq1mxjxmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paper-bin-broken"} {...others} />);
}

export default Component;
