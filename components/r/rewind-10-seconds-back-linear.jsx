import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f1bmvd0na.css';
import '../../css/t/tgcis5bxj.css';
import '../../css/u/ulycb6b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f1bmvd0na"/><path class="tgcis5bxj"/><path class="ulycb6b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-10-seconds-back-linear"} {...others} />);
}

export default Component;
