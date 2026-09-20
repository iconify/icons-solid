import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o87xgabpe.css';
import '../../css/y/y8hrvjbyx.css';
import '../../css/v/v4a-tjdlk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o87xgabpe"/><path class="y8hrvjbyx"/><path class="v4a-tjdlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-square-linear"} {...others} />);
}

export default Component;
