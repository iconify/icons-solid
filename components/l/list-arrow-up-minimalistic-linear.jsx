import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/u/u-zqtib1a.css';
import '../../css/x/xvo0n--hd.css';
import '../../css/h/hjhjwb4fd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="u-zqtib1a"/><path class="xvo0n--hd"/><path class="hjhjwb4fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-minimalistic-linear"} {...others} />);
}

export default Component;
