import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-_0bsbbx.css';
import '../../css/e/e1_dsdb2x.css';
import '../../css/z/zgx_6cbcr.css';
import '../../css/t/t0-e8sb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d-_0bsbbx"/><path class="e1_dsdb2x"/><path class="zgx_6cbcr"/><path class="t0-e8sb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-linear"} {...others} />);
}

export default Component;
