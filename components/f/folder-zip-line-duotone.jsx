import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/nggqcnpzg.css';
import '../../css/a/aty9t3x9e.css';
import '../../css/s/sag5w3b_y.css';
import '../../css/y/yyjy8ccqo.css';
import '../../css/p/pd4bwcw9z.css';
import '../../css/v/v21qiwb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><g class="mc2zb0bvp"><path class="nggqcnpzg"/><path class="aty9t3x9e"/><path class="sag5w3b_y"/><path class="yyjy8ccqo"/><path class="pd4bwcw9z"/></g><path class="v21qiwb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-zip-line-duotone"} {...others} />);
}

export default Component;
