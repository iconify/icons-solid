import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/umg9mabsh.css';
import '../../css/m/mqjl736ln.css';
import '../../css/r/r1g0lwvyb.css';
import '../../css/h/hncp3vbmo.css';
import '../../css/b/berqjq_wi.css';
import '../../css/n/nrit7ww5b.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGzm04zeqG" cx="51.2" cy="42.6" r="113.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="umg9mabsh"/><stop offset="1" class="umg9mabsh"/></radialGradient></defs><path class="mqjl736ln"/><path fill="url(#SVGzm04zeqG)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="r1g0lwvyb"/><path class="hncp3vbmo"/><path class="berqjq_wi"/><path class="nrit7ww5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:white-medium-small-square"} {...others} />);
}

export default Component;
