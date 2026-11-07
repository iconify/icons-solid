import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwa9fqbkg.css';
import '../../css/c/c8qz4oc-t.css';
import '../../css/f/fenutzb3t.css';
import '../../css/d/d01mapbla.css';
import '../../css/s/sgbwwsltw.css';
import '../../css/t/t_x7vabpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dwa9fqbkg"/><path class="c8qz4oc-t"/><path class="fenutzb3t"/><path class="d01mapbla"/><path class="sgbwwsltw"/><path class="t_x7vabpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-linear"} {...others} />);
}

export default Component;
