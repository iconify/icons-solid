import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y7wai_o7n.css';
import '../../css/m/myq80x50n.css';
import '../../css/g/g6wucrbqc.css';
import '../../css/k/k-aeqebww.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="y7wai_o7n"/><rect class="myq80x50n"/><rect class="g6wucrbqc"/><path class="k-aeqebww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy"} {...others} />);
}

export default Component;
