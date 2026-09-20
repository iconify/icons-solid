import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qj2-a9byh.css';
import '../../css/l/l40gmibpr.css';
import '../../css/c/ck_1iolbp.css';
import '../../css/j/j50gegbkk.css';
import '../../css/o/ohbg_acuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qj2-a9byh"/><path class="l40gmibpr"/><path class="ck_1iolbp"/><path class="j50gegbkk"/><path class="ohbg_acuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-line-duotone"} {...others} />);
}

export default Component;
