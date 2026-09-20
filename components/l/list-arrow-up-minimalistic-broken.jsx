import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u-zqtib1a.css';
import '../../css/x/xvo0n--hd.css';
import '../../css/h/hjhjwb4fd.css';
import '../../css/i/iq-a2cc9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u-zqtib1a"/><path class="xvo0n--hd"/><path class="hjhjwb4fd"/><path class="iq-a2cc9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-minimalistic-broken"} {...others} />);
}

export default Component;
