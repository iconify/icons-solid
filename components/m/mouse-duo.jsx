import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zb344ebmv.css';
import '../../css/c/cz016_bve.css';
import '../../css/m/mm8lkn_5j.css';
import '../../css/t/tmjo8lbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zb344ebmv"/><path class="cz016_bve wm-a"/><path class="mm8lkn_5j"/><path class="tmjo8lbfp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mouse-duo"} {...others} />);
}

export default Component;
