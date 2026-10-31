import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjijfobyz.css';
import '../../css/x/x2jyy4bto.css';
import '../../css/h/hxu7mzb1q.css';
import '../../css/g/gs7jtdb3w.css';
import '../../css/n/nlo3h95jx.css';
import '../../css/f/f03cknrbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qjijfobyz wm-k"/><path class="wm-a x2jyy4bto"/><path class="hxu7mzb1q wm-k"/><path class="gs7jtdb3w wm-a"/><path class="nlo3h95jx wm-shadow"/><path class="f03cknrbv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:panel-left-close"} {...others} />);
}

export default Component;
