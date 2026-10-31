import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfyb8bkre.css';
import '../../css/u/u2p9y8kpc.css';
import '../../css/q/qys2q-blz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bfyb8bkre wm-k"/><path class="u2p9y8kpc wm-shine"/><path class="qys2q-blz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-cat"} {...others} />);
}

export default Component;
