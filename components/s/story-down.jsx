import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o71ldkb2z.css';
import '../../css/v/vdzj18b_y.css';
import '../../css/t/t3vk7fbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="o71ldkb2z"/><path class="vdzj18b_y"/><path class="t3vk7fbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:story-down"} {...others} />);
}

export default Component;
