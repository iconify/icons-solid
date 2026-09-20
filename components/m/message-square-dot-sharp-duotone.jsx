import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s9dzx_b3w.css';
import '../../css/b/ba0j365wv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="s9dzx_b3w"/><path class="ba0j365wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-dot-sharp-duotone"} {...others} />);
}

export default Component;
