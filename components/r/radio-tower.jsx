import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hdg_egl-g.css';
import '../../css/k/k-crevbva.css';
import '../../css/g/gif5fhbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hdg_egl-g wm-shadow"/><path class="k-crevbva wm-shadow"/><path class="gif5fhbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:radio-tower"} {...others} />);
}

export default Component;
