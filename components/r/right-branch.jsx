import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5oj9bbnl.css';
import '../../css/w/wn9vp_q7p.css';
import '../../css/h/hpifqdbin.css';
import '../../css/k/kkkqdqbde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u5oj9bbnl"/><path class="wn9vp_q7p"/><circle class="hpifqdbin"/><path class="kkkqdqbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:right-branch"} {...others} />);
}

export default Component;
