import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7an4rb8g.css';
import '../../css/e/eays0rbix.css';
import '../../css/g/gvmznkb0r.css';
import '../../css/b/bgei7lb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7an4rb8g"/><path class="eays0rbix"/><path class="gvmznkb0r"/><path class="bgei7lb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:spelling-check-2"} {...others} />);
}

export default Component;
