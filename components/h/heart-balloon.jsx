import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dvevkxsgf.css';
import '../../css/k/k78ell8ue.css';
import '../../css/e/ecszjobpi.css';
import '../../css/m/mm_isivjv.css';
import '../../css/f/fhg6mvbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dvevkxsgf wm-shadow"/><path class="k78ell8ue"/><path class="ecszjobpi"/><path class="mm_isivjv"/><path class="fhg6mvbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart-balloon"} {...others} />);
}

export default Component;
