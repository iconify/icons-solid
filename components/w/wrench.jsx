import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u331cobja.css';
import '../../css/j/jwk6asbwt.css';
import '../../css/l/lpftj47-a.css';
import '../../css/h/h8e_jfbop.css';
import '../../css/w/wo5s_8bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u331cobja wm-k"/><path class="jwk6asbwt wm-k"/><path class="lpftj47-a wm-k"/><path class="h8e_jfbop wm-shine"/><path class="wm-k wo5s_8bvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:wrench"} {...others} />);
}

export default Component;
