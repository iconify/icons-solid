import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svsyk2bqe.css';
import '../../css/d/dhau0jb_j.css';
import '../../css/k/kvnd19d4n.css';
import '../../css/h/h1yn-0bif.css';
import '../../css/v/vmc5v0z9t.css';
import '../../css/a/anyjahmuw.css';
import '../../css/x/xc-yi1y1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyNjSI3dm" cx="11" cy="12" r="11" gradientUnits="userSpaceOnUse"><stop offset="0" class="svsyk2bqe"/><stop offset="1" class="dhau0jb_j"/></radialGradient></defs><path class="kvnd19d4n wm-shadow"/><path fill="url(#SVGyNjSI3dm)" class="h1yn-0bif wm-k"/><path class="vmc5v0z9t wm-a"/><circle class="anyjahmuw wm-a"/><path class="wm-shine xc-yi1y1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:mehndi-hand"} {...others} />);
}

export default Component;
