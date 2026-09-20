import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3rov_nmk.css';
import '../../css/p/pj530ypns.css';
import '../../css/l/l2hwysa-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v3rov_nmk"/><path clip-rule="evenodd" class="pj530ypns"/><path class="l2hwysa-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-shine"} {...others} />);
}

export default Component;
