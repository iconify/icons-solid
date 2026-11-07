import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iktc6lbdf.css';
import '../../css/h/hsrvbowyx.css';
import '../../css/r/r1tgwgbzw.css';
import '../../css/o/oocf04n0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iktc6lbdf"/><path class="hsrvbowyx"/><path class="r1tgwgbzw"/><path class="oocf04n0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-minimalistic-line-duotone"} {...others} />);
}

export default Component;
