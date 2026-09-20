import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/csm16okln.css';
import '../../css/z/z-vgkm23z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="csm16okln"/><path class="z-vgkm23z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-2-sharp-duotone"} {...others} />);
}

export default Component;
