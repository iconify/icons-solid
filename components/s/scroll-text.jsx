import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5v-28hwz.css';
import '../../css/k/k_fnqcbfy.css';
import '../../css/s/s_d5lc1ez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w5v-28hwz wm-k"/><path class="k_fnqcbfy wm-shine"/><path class="s_d5lc1ez wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:scroll-text"} {...others} />);
}

export default Component;
