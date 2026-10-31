import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6q0web2s.css';
import '../../css/s/seb0b41ob.css';
import '../../css/r/rbuuxbmhx.css';
import '../../css/g/gn8ms0bbq.css';
import '../../css/n/n89_s913t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t6q0web2s wm-shadow"/><path class="seb0b41ob"/><path class="rbuuxbmhx"/><path class="gn8ms0bbq"/><path class="n89_s913t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mountain"} {...others} />);
}

export default Component;
