import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwajf-ucs.css';
import '../../css/n/n0n3d3b6f.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uwajf-ucs"/><path class="n0n3d3b6f"/><path class="isy2lrdil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-minus-sharp-two-tone"} {...others} />);
}

export default Component;
