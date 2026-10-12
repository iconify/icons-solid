import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh10fn02x.css';
import '../../css/t/tgsdak3do.css';
import '../../css/g/g9_f1pwgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oh10fn02x"/><path class="tgsdak3do"/><path class="g9_f1pwgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-charging"} {...others} />);
}

export default Component;
