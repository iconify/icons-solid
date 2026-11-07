import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v90gbqbox.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/d/de5cici1x.css';
import '../../css/f/f1qgw1bwi.css';
import '../../css/e/elckf4blp.css';
import '../../css/f/ftpy_bcfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="v90gbqbox"/><path class="lq7a-_8su"/><path class="pq5xj2bli"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="de5cici1x"/><path class="f1qgw1bwi"/><path class="elckf4blp"/><path class="ftpy_bcfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-linear"} {...others} />);
}

export default Component;
