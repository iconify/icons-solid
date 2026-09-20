import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5my0obpu.css';
import '../../css/k/klvygvcib.css';
import '../../css/h/ht3z8-bqi.css';
import '../../css/u/ufkydepom.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGoOdOYdcI" x1="-15.53" x2="90.53" y1="90.53" y2="-15.53" gradientTransform="scale(1.70667)" gradientUnits="userSpaceOnUse"><stop offset="0" class="e5my0obpu"/><stop offset="1" class="klvygvcib"/></linearGradient></defs><path fill="url(#SVGoOdOYdcI)" class="ht3z8-bqi prefix__cls-1"/><path class="prefix__cls-2 ufkydepom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dynamodb"} {...others} />);
}

export default Component;
