import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y5r43gb7c.css';
import '../../css/h/harpdob2d.css';
import '../../css/a/abr98jbty.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y5r43gb7c"/><path class="harpdob2d"/><path class="abr98jbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:transfer-truck-time"} {...others} />);
}

export default Component;
