import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-9qosbks.css';
import '../../css/y/ygwi57j2x.css';
import '../../css/e/e1y9aqblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j-9qosbks"/><path class="ygwi57j2x"/><path class="e1y9aqblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-one-minimalistic-line-duotone"} {...others} />);
}

export default Component;
