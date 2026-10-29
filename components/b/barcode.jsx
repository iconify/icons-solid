import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw2oadc3t.css';
import '../../css/g/gwhh02bok.css';
import '../../css/k/kepr7i-nd.css';
import '../../css/v/vgqd6ux5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mw2oadc3t wm-k"/><path class="gwhh02bok wm-k"/><path class="kepr7i-nd wm-k"/><path class="vgqd6ux5c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:barcode"} {...others} />);
}

export default Component;
