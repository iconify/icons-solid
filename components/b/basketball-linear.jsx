import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ro7vyibyz.css';
import '../../css/l/lcxm2bc4c.css';
import '../../css/r/rasqg796i.css';
import '../../css/i/i87_9e8dl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ro7vyibyz"/><path class="lcxm2bc4c"/><path class="rasqg796i"/><path class="i87_9e8dl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:basketball-linear"} {...others} />);
}

export default Component;
