import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y6p9_bslg.css';
import '../../css/r/r5xu_nn8e.css';
import '../../css/p/p-waabblu.css';
import '../../css/u/ux0lnab5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y6p9_bslg"/><path class="r5xu_nn8e"/><path class="y6p9_bslg"/><path class="p-waabblu"/><path class="ux0lnab5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pencil"} {...others} />);
}

export default Component;
