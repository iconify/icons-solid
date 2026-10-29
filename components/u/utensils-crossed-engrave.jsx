import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mv35mk_ha.css';
import '../../css/v/vfnwcz4tm.css';
import '../../css/e/e57-ksbzo.css';
import '../../css/b/b5jgdnp5j.css';
import '../../css/t/t8rq8gxbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mv35mk_ha wm-k"/><path class="vfnwcz4tm wm-a"/><path class="e57-ksbzo wm-shadow"/><path class="b5jgdnp5j wm-k"/><path class="t8rq8gxbc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-crossed-engrave"} {...others} />);
}

export default Component;
