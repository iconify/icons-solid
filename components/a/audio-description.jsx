import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5_w3cbpv.css';
import '../../css/d/dlv_i4blm.css';
import '../../css/y/yi1ygjbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i5_w3cbpv"/><path clip-rule="evenodd" class="dlv_i4blm"/><path class="yi1ygjbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:audio-description"} {...others} />);
}

export default Component;
