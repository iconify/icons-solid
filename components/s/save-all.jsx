import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ibcbmjb8z.css';
import '../../css/u/u3g0wc7-w.css';
import '../../css/d/dn389gjlt.css';
import '../../css/b/bum00rezi.css';
import '../../css/t/tzjc20buc.css';
import '../../css/j/j1pk1-bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ibcbmjb8z wm-shadow"/><path class="u3g0wc7-w"/><path class="dn389gjlt"/><path class="bum00rezi"/><path class="tzjc20buc"/><path class="j1pk1-bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:save-all"} {...others} />);
}

export default Component;
