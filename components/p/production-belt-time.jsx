import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qa1eh1bui.css';
import '../../css/z/zirvt1tna.css';
import '../../css/l/ltgv4aczb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qa1eh1bui"/><path class="zirvt1tna"/><path class="ltgv4aczb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:production-belt-time"} {...others} />);
}

export default Component;
