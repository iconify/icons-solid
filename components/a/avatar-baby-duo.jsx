import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/f/fxujr-byn.css';
import '../../css/j/jx2j5ujxg.css';
import '../../css/a/afrxd3bde.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/w/w0uecybzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="fxujr-byn wm-a"/><path class="jx2j5ujxg wm-a"/><path class="afrxd3bde wm-a"/><path class="bg3dj-bbo"/><path class="d3y9mw6db"/><path class="w0uecybzn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-baby-duo"} {...others} />);
}

export default Component;
