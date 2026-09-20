import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucde5db9d.css';
import '../../css/o/oeiijo52p.css';
import '../../css/r/ry13hccoi.css';
import '../../css/m/mdcko5bzp.css';
import '../../css/m/mildjrb6w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ucde5db9d"/><path class="oeiijo52p"/><path class="ry13hccoi"/><path class="mdcko5bzp"/><path class="mildjrb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:desktop-screensaver-sleep"} {...others} />);
}

export default Component;
