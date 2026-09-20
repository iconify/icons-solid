import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txmeiryss.css';
import '../../css/u/uhm_niifn.css';
import '../../css/x/x009dyblo.css';
import '../../css/i/i6w8b0b2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="txmeiryss"/><path class="uhm_niifn"/><path class="x009dyblo"/><path class="i6w8b0b2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-bold-duotone"} {...others} />);
}

export default Component;
