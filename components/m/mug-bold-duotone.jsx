import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/cf4va2ows.css';
import '../../css/l/ldse3ccpn.css';
import '../../css/u/uryn3_6yg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="cf4va2ows"/><path class="ldse3ccpn"/></g><path clip-rule="evenodd" class="uryn3_6yg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-bold-duotone"} {...others} />);
}

export default Component;
