import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bth93hb1e.css';
import '../../css/h/hadtb8bnd.css';
import '../../css/e/e9z24efaj.css';
import '../../css/l/l-94ahb3r.css';
import '../../css/j/jcfnd3a4g.css';
import '../../css/b/b6lxflb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bth93hb1e"/><path class="hadtb8bnd"/><path class="e9z24efaj"/><path class="l-94ahb3r"/><path class="jcfnd3a4g"/><path class="b6lxflb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:movie-camera-2"} {...others} />);
}

export default Component;
