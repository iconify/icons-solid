import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/goy_4nffs.css';
import '../../css/z/z7zr1slfh.css';
import '../../css/n/njsyqb-ly.css';
import '../../css/g/g8_iol2hx.css';
import '../../css/m/m1wyev29g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="goy_4nffs"/><path class="wm-shine z7zr1slfh"/><path class="njsyqb-ly wm-k"/><path class="g8_iol2hx wm-a"/><path class="m1wyev29g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:binoculars"} {...others} />);
}

export default Component;
