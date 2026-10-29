import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mejmzewfe.css';
import '../../css/t/tv2vjto9b.css';
import '../../css/p/pqfn0gyql.css';
import '../../css/j/jlyqm6kgv.css';
import '../../css/a/axgx6tp7d.css';
import '../../css/e/es-wr6bhv.css';
import '../../css/c/c-fwmf48t.css';
import '../../css/y/y6qjipb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mejmzewfe wm-k"/><path class="tv2vjto9b wm-k"/><path class="pqfn0gyql wm-k"/><path class="jlyqm6kgv wm-a"/><path class="axgx6tp7d wm-k"/><path class="es-wr6bhv wm-a"/><path class="c-fwmf48t wm-k"/><path class="wm-k y6qjipb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:motorcycle"} {...others} />);
}

export default Component;
