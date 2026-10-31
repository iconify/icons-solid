import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lroqjacda.css';
import '../../css/s/sogrjjsbu.css';
import '../../css/f/f8zr51bbs.css';
import '../../css/z/z2q2l93ud.css';
import '../../css/w/wa3daqb8v.css';
import '../../css/b/bp9l7n85m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lroqjacda wm-shadow"/><path class="sogrjjsbu"/><path class="f8zr51bbs"/><path class="z2q2l93ud"/><path class="wa3daqb8v"/><path class="bp9l7n85m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:award"} {...others} />);
}

export default Component;
