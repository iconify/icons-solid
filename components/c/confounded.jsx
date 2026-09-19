import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phtqsc2go.css';
import '../../css/h/hh77phbau.css';
import '../../css/i/iq95bwszw.css';
import '../../css/m/mj8rt0bqp.css';
import '../../css/a/a2pvu-bym.css';
import '../../css/o/owdsu4box.css';
import '../../css/m/map-g3fmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="phtqsc2go"/><path class="hh77phbau"/><path class="iq95bwszw"/><path class="mj8rt0bqp"/><path class="a2pvu-bym"/><path class="owdsu4box"/><path class="map-g3fmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:confounded"} {...others} />);
}

export default Component;
