import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zha06kbme.css';
import '../../css/s/sej9af0wr.css';
import '../../css/i/ie2u0c9xt.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zha06kbme"/><path class="sej9af0wr"/><path class="ie2u0c9xt"/><path class="cx31vwdjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-code-line-duotone"} {...others} />);
}

export default Component;
