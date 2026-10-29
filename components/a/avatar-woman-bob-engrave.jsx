import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h8tt0ob8s.css';
import '../../css/k/kun7wxbsu.css';
import '../../css/n/nunu01sfn.css';
import '../../css/j/jxozh2_lw.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/f/fz_84_b9c.css';
import '../../css/b/b1ssu5c-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h8tt0ob8s wm-k"/><path class="kun7wxbsu wm-a"/><path class="nunu01sfn wm-shadow"/><path class="jxozh2_lw wm-k"/><path class="d3y9mw6db wm-k"/><path class="fz_84_b9c wm-a"/><path class="b1ssu5c-a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bob-engrave"} {...others} />);
}

export default Component;
