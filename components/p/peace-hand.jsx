import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ke6pb1bjn.css';
import '../../css/g/gxpdn9-wz.css';
import '../../css/v/vazvq7ahv.css';
import '../../css/r/rcjmc3bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ke6pb1bjn"/><path class="gxpdn9-wz"/><path class="vazvq7ahv"/><path class="rcjmc3bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:peace-hand"} {...others} />);
}

export default Component;
