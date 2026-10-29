import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehquh7b1d.css';
import '../../css/k/kel1plyxk.css';
import '../../css/q/qi8avabeo.css';
import '../../css/b/bkuskmbcf.css';
import '../../css/p/px29b1b5z.css';
import '../../css/e/ef0y6obmc.css';
import '../../css/o/omex7ubpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ehquh7b1d wm-shadow"/><path class="kel1plyxk wm-shadow"/><path class="qi8avabeo"/><path class="bkuskmbcf"/><path class="px29b1b5z"/><path class="ef0y6obmc wm-shine"/><path class="omex7ubpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:more-horizontal"} {...others} />);
}

export default Component;
