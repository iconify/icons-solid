import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bt5przbar.css';
import '../../css/q/qgaogacwb.css';
import '../../css/f/f9fnrfbtc.css';
import '../../css/i/i6nrt8nnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bt5przbar"/><path class="qgaogacwb"/><path class="f9fnrfbtc"/><path class="i6nrt8nnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-line-duotone"} {...others} />);
}

export default Component;
