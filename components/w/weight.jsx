import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pdh1to_cg.css';
import '../../css/z/zwxr7_b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pdh1to_cg"/><path class="zwxr7_b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:weight"} {...others} />);
}

export default Component;
