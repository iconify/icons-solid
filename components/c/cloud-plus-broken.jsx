import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z54hrlbul.css';
import '../../css/h/he-som29x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z54hrlbul"/><path class="he-som29x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-plus-broken"} {...others} />);
}

export default Component;
