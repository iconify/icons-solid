import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgbae3ihc.css';
import '../../css/e/e-u1fwb6m.css';
import '../../css/b/b3j_o11mv.css';
import '../../css/i/iyktzwrzr.css';
import '../../css/h/h1r9i2bjg.css';
import '../../css/d/dnh4zdkce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tgbae3ihc"/><path class="e-u1fwb6m"/><path class="b3j_o11mv"/><path class="iyktzwrzr"/><path class="h1r9i2bjg"/><path class="dnh4zdkce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-star"} {...others} />);
}

export default Component;
