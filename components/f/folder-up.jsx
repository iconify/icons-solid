import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p08dunoax.css';
import '../../css/x/xcptdlqma.css';
import '../../css/h/hxk_-67pg.css';
import '../../css/v/vyl0xiknd.css';
import '../../css/c/c1dqdey5w.css';
import '../../css/m/mouwnr-xe.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p08dunoax wm-k"/><path class="wm-deco xcptdlqma"/><path class="hxk_-67pg wm-k"/><path class="vyl0xiknd wm-k"/><path class="c1dqdey5w wm-shadow"/><path class="mouwnr-xe wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-up"} {...others} />);
}

export default Component;
