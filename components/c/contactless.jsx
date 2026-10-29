import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecfsu75ux.css';
import '../../css/e/ej4hmpb3z.css';
import '../../css/j/jxq-dhbdk.css';
import '../../css/j/j-0wr-brw.css';
import '../../css/i/i50dyftle.css';
import '../../css/e/e0edxp1rx.css';
import '../../css/g/g6j78vbnm.css';
import '../../css/g/ghico226u.css';
import '../../css/f/ftn--jb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ecfsu75ux wm-shadow"/><path class="ej4hmpb3z wm-shadow"/><path class="jxq-dhbdk"/><path class="j-0wr-brw"/><path class="i50dyftle"/><path class="e0edxp1rx"/><path class="g6j78vbnm wm-shine"/><path class="ghico226u wm-shine"/><path class="ftn--jb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:contactless"} {...others} />);
}

export default Component;
