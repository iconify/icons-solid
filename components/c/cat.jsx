import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tvg65tvki.css';
import '../../css/i/iagdctb2d.css';
import '../../css/e/eiys41bih.css';
import '../../css/p/pi6-q1i4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tvg65tvki wm-shadow"/><path class="iagdctb2d wm-shadow"/><path class="eiys41bih"/><path class="pi6-q1i4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cat"} {...others} />);
}

export default Component;
