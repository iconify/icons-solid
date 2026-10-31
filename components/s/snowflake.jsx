import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jygufhbuc.css';
import '../../css/a/a887lccaa.css';
import '../../css/y/yief2n08s.css';
import '../../css/c/cul4_8bpx.css';
import '../../css/p/pkbii5xrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jygufhbuc wm-k"/><path class="a887lccaa wm-deco"/><path class="wm-k yief2n08s"/><path class="cul4_8bpx wm-shadow"/><path class="pkbii5xrd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:snowflake"} {...others} />);
}

export default Component;
