import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alqynpixv.css';
import '../../css/p/p0rrzv-tj.css';
import '../../css/u/u_o6xbc0h.css';
import '../../css/f/fuqrzb0_y.css';
import '../../css/g/gv-pa4g-c.css';
import '../../css/x/xi0c4897p.css';
import '../../css/x/xt85ltohp.css';
import '../../css/i/i2m2ngbqb.css';
import '../../css/w/wu455gb9i.css';
import '../../css/j/jd801wbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="alqynpixv wm-shadow"/><path class="p0rrzv-tj wm-shadow"/><path class="u_o6xbc0h"/><path class="fuqrzb0_y"/><path class="gv-pa4g-c"/><path class="xi0c4897p"/><path class="wm-shine xt85ltohp"/><path class="i2m2ngbqb wm-shine"/><path class="wu455gb9i"/><path class="jd801wbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:ghost"} {...others} />);
}

export default Component;
