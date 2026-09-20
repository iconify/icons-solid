import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t2v-w55mg.css';
import '../../css/v/vigqkobhn.css';
import '../../css/v/vw7st-c2b.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/o/owo8jhnio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t2v-w55mg"/><path class="vigqkobhn"/><path class="vw7st-c2b"/><path class="jct4a2bzg"/><path class="owo8jhnio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-line-duotone"} {...others} />);
}

export default Component;
