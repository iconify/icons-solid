import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmu5_acrl.css';
import '../../css/b/bv235buvs.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/p/p7wxuhchf.css';
import '../../css/s/sn3zwkbyo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dmu5_acrl"/><path clip-rule="evenodd" class="bv235buvs"/><path class="sj71gtfbi"/><path class="p7wxuhchf"/><path class="sn3zwkbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:camera-square"} {...others} />);
}

export default Component;
