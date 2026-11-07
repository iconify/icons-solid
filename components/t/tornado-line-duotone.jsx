import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzd06b-3d.css';
import '../../css/o/o4yw8zb8x.css';
import '../../css/z/z293kdb-f.css';
import '../../css/f/f2i7g9b1n.css';
import '../../css/m/mxu-8gbhy.css';
import '../../css/w/wujdauagd.css';
import '../../css/o/ono0e8bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kzd06b-3d"/><path class="o4yw8zb8x"/><path class="z293kdb-f"/><path class="f2i7g9b1n"/><path class="mxu-8gbhy"/><path class="wujdauagd"/><path class="ono0e8bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-line-duotone"} {...others} />);
}

export default Component;
