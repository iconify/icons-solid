import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3yd9f_ef.css';
import '../../css/z/z_3uwpbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x3yd9f_ef"/><path class="z_3uwpbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:playlist-add"} {...others} />);
}

export default Component;
