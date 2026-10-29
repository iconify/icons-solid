import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfi2icc8e.css';
import '../../css/g/guceseb7p.css';
import '../../css/y/yw5aowamp.css';
import '../../css/d/dx_s1-bsy.css';
import '../../css/q/q05kn6bnh.css';
import '../../css/n/ntol9fbsq.css';
import '../../css/d/d6f3r7b2r.css';
import '../../css/o/oie_9pgpj.css';
import '../../css/c/cowtevbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mfi2icc8e wm-shadow"/><path class="guceseb7p wm-shadow"/><path class="yw5aowamp"/><path class="dx_s1-bsy"/><path class="q05kn6bnh"/><path class="ntol9fbsq"/><path class="d6f3r7b2r wm-shine"/><path class="oie_9pgpj wm-shine"/><path class="cowtevbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:audio-lines"} {...others} />);
}

export default Component;
