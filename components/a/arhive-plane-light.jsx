import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n53p-2dpt.css';
import '../../css/z/zqusejbgv.css';
import '../../css/v/vokirb_pg.css';
import '../../css/l/l2na540kp.css';
import '../../css/x/xtch0nbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="n53p-2dpt"/><path class="zqusejbgv"/><path class="vokirb_pg"/><path class="l2na540kp"/><path class="xtch0nbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-plane-light"} {...others} />);
}

export default Component;
