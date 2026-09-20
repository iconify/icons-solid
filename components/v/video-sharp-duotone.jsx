import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cqmknwfil.css';
import '../../css/r/rtfp0_byy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="cqmknwfil"/><path clip-rule="evenodd" class="rtfp0_byy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-sharp-duotone"} {...others} />);
}

export default Component;
