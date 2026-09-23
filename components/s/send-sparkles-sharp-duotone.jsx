import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mrwdvvw0o.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/k/kgawvdakg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="mrwdvvw0o"/><path class="uecn1lb3p"/><path class="kgawvdakg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
