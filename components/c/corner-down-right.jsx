import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geer96bee.css';
import '../../css/i/iu4clfvda.css';
import '../../css/b/b5ppmovqv.css';
import '../../css/k/kz71i2hpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="geer96bee wm-k"/><path class="iu4clfvda wm-k"/><path class="b5ppmovqv wm-k"/><path class="kz71i2hpn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:corner-down-right"} {...others} />);
}

export default Component;
