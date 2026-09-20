import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdn3wpbiq.css';
import '../../css/i/i_imu1b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mdn3wpbiq"/><path clip-rule="evenodd" class="i_imu1b0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:document-expressive"} {...others} />);
}

export default Component;
