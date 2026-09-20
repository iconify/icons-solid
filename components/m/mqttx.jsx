import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1a6rng3c.css';
import '../../css/b/boerymbwb.css';
import '../../css/z/zazgomb8f.css';
import '../../css/c/cp557rb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGUFkVki5K" x1="-691.102" x2="-691.102" y1="784.867" y2="792.867" gradientTransform="matrix(64 0 0 -64.0012 44486.5 50744.46)" gradientUnits="userSpaceOnUse"><stop offset="0" class="i1a6rng3c"/><stop offset="1" class="boerymbwb"/></linearGradient><path fill="url(#SVGUFkVki5K)" class="zazgomb8f"/><path class="cp557rb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mqttx"} {...others} />);
}

export default Component;
