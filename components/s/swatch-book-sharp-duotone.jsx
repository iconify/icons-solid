import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c_p5py6nk.css';
import '../../css/o/oxc64zbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="c_p5py6nk"/><path clip-rule="evenodd" class="oxc64zbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:swatch-book-sharp-duotone"} {...others} />);
}

export default Component;
