import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uww372pku.css';
import '../../css/m/mfd61fjuk.css';
import '../../css/f/fxtokhu1u.css';
import '../../css/t/tmborccvy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="uww372pku"/><circle class="mfd61fjuk"/><circle class="fxtokhu1u"/><path class="tmborccvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy"} {...others} />);
}

export default Component;
