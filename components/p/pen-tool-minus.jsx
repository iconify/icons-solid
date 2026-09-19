import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9pv0vbyl.css';
import '../../css/f/fxex-8b8d.css';
import '../../css/g/g2bflsbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p9pv0vbyl"/><path class="fxex-8b8d"/><path class="g2bflsbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pen-tool-minus"} {...others} />);
}

export default Component;
