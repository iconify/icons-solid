import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f_h_x_bua.css';
import '../../css/c/c9j4_hbrg.css';
import '../../css/p/p9l8-rlng.css';
import '../../css/z/zeggah3kn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f_h_x_bua"/><path class="c9j4_hbrg"/><path class="p9l8-rlng"/><path class="zeggah3kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:no-smoking-circled"} {...others} />);
}

export default Component;
