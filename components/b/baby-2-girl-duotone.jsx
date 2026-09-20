import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/w/w9u_dxeve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fvyxm7bvs"/><path class="sp1mbgw9c"/><path class="w9u_dxeve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-2-girl-duotone"} {...others} />);
}

export default Component;
