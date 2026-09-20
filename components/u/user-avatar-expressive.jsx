import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_rdoab8o.css';
import '../../css/v/v3l_8mubl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d_rdoab8o"/><path clip-rule="evenodd" class="v3l_8mubl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:user-avatar-expressive"} {...others} />);
}

export default Component;
