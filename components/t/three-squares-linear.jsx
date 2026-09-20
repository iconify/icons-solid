import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w37s95bcr.css';
import '../../css/n/ncu9ifj7a.css';
import '../../css/g/gz8ip2wkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w37s95bcr"/><path class="ncu9ifj7a"/><path class="gz8ip2wkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-linear"} {...others} />);
}

export default Component;
