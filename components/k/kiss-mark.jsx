import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghtxovydc.css';
import '../../css/f/fhnnv7byy.css';
import '../../css/j/jxqi2jbpi.css';
import '../../css/r/rlh6yzqpr.css';
import '../../css/m/m2a-gccku.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVG4Eqd3dJV" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="ghtxovydc"/><stop offset="1" class="fhnnv7byy"/></linearGradient></defs><g class="jxqi2jbpi"><path fill="url(#SVG4Eqd3dJV)" transform="matrix(2.5 0 0 2.5 2.476 -4.934)" class="rlh6yzqpr"/><path class="m2a-gccku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:kiss-mark"} {...others} />);
}

export default Component;
