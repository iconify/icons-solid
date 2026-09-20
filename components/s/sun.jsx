import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xedhwhzeh.css';
import '../../css/v/v5chx8n4s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xedhwhzeh"/><path class="v5chx8n4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:sun"} {...others} />);
}

export default Component;
