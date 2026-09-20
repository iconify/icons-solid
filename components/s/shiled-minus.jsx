import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yc12b2jzo.css';
import '../../css/v/vgg7hdcdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yc12b2jzo"/><path class="vgg7hdcdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:shiled-minus"} {...others} />);
}

export default Component;
