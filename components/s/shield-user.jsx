import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eysevybrd.css';
import '../../css/i/i4jh4i47c.css';
import '../../css/r/rsyrjcc-g.css';
import '../../css/x/xr-g2q37h.css';
import '../../css/g/gnso_qazw.css';
import '../../css/v/vd8ht650l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eysevybrd wm-shadow"/><path class="i4jh4i47c"/><path class="rsyrjcc-g"/><path class="xr-g2q37h"/><path class="gnso_qazw"/><path class="vd8ht650l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-user"} {...others} />);
}

export default Component;
