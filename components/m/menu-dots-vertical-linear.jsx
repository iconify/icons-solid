import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xe53owbmy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/z/zopjch_2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle transform="rotate(90 12 5)" class="xe53owbmy"/><circle transform="rotate(90 12 12)" class="h_tsn8bxt"/><circle transform="rotate(90 12 19)" class="zopjch_2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-vertical-linear"} {...others} />);
}

export default Component;
