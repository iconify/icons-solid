import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8lud0bbk.css';
import '../../css/j/jvb0b2c3r.css';
import '../../css/j/j_e93hhyk.css';
import '../../css/a/alycb5u0t.css';
import '../../css/m/m9dqdpbcs.css';
import '../../css/i/izb20nb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.78 9)" class="f8lud0bbk"/><rect transform="rotate(-90 1.78 21.23)" class="jvb0b2c3r"/><rect transform="rotate(-90 1.78 9)" class="j_e93hhyk"/><rect transform="rotate(-90 1.78 15.11)" class="alycb5u0t"/><rect transform="rotate(-90 1.78 21.23)" class="m9dqdpbcs"/><path class="izb20nb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:server"} {...others} />);
}

export default Component;
