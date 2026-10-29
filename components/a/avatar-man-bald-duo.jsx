import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/u/unieoevdx.css';
import '../../css/w/w5xfcbbhj.css';
import '../../css/b/bduql8bcs.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/n/n4ut6924x.css';
import '../../css/w/wep00ffkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="unieoevdx wm-a"/><path class="w5xfcbbhj"/><path class="bduql8bcs wm-a"/><path class="bg3dj-bbo"/><path class="d3y9mw6db"/><path class="n4ut6924x wm-a"/><path class="wep00ffkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-bald-duo"} {...others} />);
}

export default Component;
