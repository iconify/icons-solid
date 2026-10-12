import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb_vrmb-h.css';
import '../../css/k/kklxembkl.css';
import '../../css/i/if4m6-b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fb_vrmb-h"/><rect transform="rotate(90 0 21.23)scale(-1 1)" class="kklxembkl"/><path class="if4m6-b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film"} {...others} />);
}

export default Component;
