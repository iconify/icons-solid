import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9e_w_bgk.css';
import '../../css/p/p59jgoh5a.css';
import '../../css/m/mm-pvyqxi.css';
import '../../css/f/f7k12xbna.css';
import '../../css/v/v6k41cbfr.css';
import '../../css/h/hu4w8sbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m9e_w_bgk"/><path clip-rule="evenodd" class="p59jgoh5a"/><path clip-rule="evenodd" class="mm-pvyqxi"/><path class="f7k12xbna"/><path class="v6k41cbfr"/><path class="hu4w8sbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-outline"} {...others} />);
}

export default Component;
