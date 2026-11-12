import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilc2a4brv.css';
import '../../css/s/s7nzlmb-s.css';
import '../../css/m/mfu4bju8l.css';
import '../../css/c/cc1bk7b8d.css';
import '../../css/r/rkn7dcc2m.css';
import '../../css/c/cezivf04t.css';
import '../../css/t/tr8cmvb1y.css';
import '../../css/t/teouqwhca.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ilc2a4brv"/><linearGradient id="SVGjKG6UDmG" x1="49" x2="151.6" y1="390" y2="179.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="s7nzlmb-s"/><stop offset=".5" class="mfu4bju8l"/><stop offset="1" class="cc1bk7b8d"/></linearGradient><path fill="url(#SVGjKG6UDmG)" class="rkn7dcc2m"/><linearGradient id="SVGhz3UscQg" x1="244.4" x2="380.5" y1="252.4" y2="454.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="s7nzlmb-s"/><stop offset=".5" class="cezivf04t"/><stop offset="1" class="tr8cmvb1y"/></linearGradient><path fill="url(#SVGhz3UscQg)" class="teouqwhca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:komplett"} {...others} />);
}

export default Component;
