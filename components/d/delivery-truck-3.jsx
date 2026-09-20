import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4-_robim.css';
import '../../css/s/s51leqbex.css';
import '../../css/i/i2x8cvemd.css';
import '../../css/c/cgft2nbiy.css';
import '../../css/r/rn_k-ibju.css';
import '../../css/k/k266kz5fq.css';
import '../../css/w/wqougvbds.css';
import '../../css/x/x5_0hlcjs.css';
import '../../css/x/xrbk1lb8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4-_robim"/><path class="s51leqbex"/><path class="i2x8cvemd"/><path class="cgft2nbiy"/><path class="rn_k-ibju"/><path class="k266kz5fq"/><path class="wqougvbds"/><path class="x5_0hlcjs"/><path class="xrbk1lb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:delivery-truck-3"} {...others} />);
}

export default Component;
