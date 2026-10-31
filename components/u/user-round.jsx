import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhr4vhbvx.css';
import '../../css/x/xlo6-boyt.css';
import '../../css/p/p38m46bfk.css';
import '../../css/c/csx5scrng.css';
import '../../css/q/qzgdajm7m.css';
import '../../css/n/nuzg1bbnt.css';
import '../../css/z/z18k12mgy.css';
import '../../css/q/qhwa2gbkj.css';
import '../../css/r/rifku6bgu.css';
import '../../css/s/s4h386b4h.css';
import '../../css/x/xr823ibca.css';
import '../../css/y/yp9kigbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jhr4vhbvx wm-shadow"/><path class="xlo6-boyt"/><path class="p38m46bfk"/><path class="csx5scrng"/><path class="qzgdajm7m"/><path class="nuzg1bbnt"/><path class="z18k12mgy"/><path class="qhwa2gbkj"/><path class="rifku6bgu"/><path class="s4h386b4h"/><path class="wm-shine xr823ibca"/><path class="wm-shine yp9kigbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:user-round"} {...others} />);
}

export default Component;
