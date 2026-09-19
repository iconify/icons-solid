import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yq5outbnn.css';
import '../../css/h/h9xdm6kyq.css';
import '../../css/d/dkh8f-qdu.css';
import '../../css/v/vtg6btbak.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yq5outbnn"/><path class="h9xdm6kyq"/><path clip-rule="evenodd" class="dkh8f-qdu"/><path class="vtg6btbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:celsius-outline"} {...others} />);
}

export default Component;
