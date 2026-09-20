import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5_w3cbpv.css';
import '../../css/m/mao-10b4j.css';
import '../../css/v/v11yvdspi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i5_w3cbpv"/><path clip-rule="evenodd" class="mao-10b4j"/><path class="v11yvdspi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:audio-description-expressive"} {...others} />);
}

export default Component;
