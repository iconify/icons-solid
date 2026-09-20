import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dwqta87zm.css';
import '../../css/w/wx6aefbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dwqta87zm"/><path class="wx6aefbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calculator-sharp"} {...others} />);
}

export default Component;
