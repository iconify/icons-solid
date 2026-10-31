import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/og2bz-m0s.css';
import '../../css/o/o0_9dsboj.css';
import '../../css/v/vwipwnble.css';
import '../../css/g/gknynpjfs.css';
import '../../css/x/x95z-zbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="og2bz-m0s wm-shadow"/><path class="o0_9dsboj wm-shadow"/><path class="vwipwnble"/><path class="gknynpjfs"/><path class="x95z-zbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:thermometer-sun"} {...others} />);
}

export default Component;
