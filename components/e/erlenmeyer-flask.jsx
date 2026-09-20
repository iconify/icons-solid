import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7y5bo06z.css';
import '../../css/p/pi0-99nxr.css';
import '../../css/b/bf-gxhb-l.css';
import '../../css/w/wdf3xp0sq.css';
import '../../css/w/wmsdu-pjw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p7y5bo06z"/><path class="pi0-99nxr"/><path class="bf-gxhb-l"/><path class="wdf3xp0sq"/><path class="wmsdu-pjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:erlenmeyer-flask"} {...others} />);
}

export default Component;
