import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iekhtubws.css';
import '../../css/e/eoi_7w6aq.css';
import '../../css/y/yq5yyzb_d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="iekhtubws"/><path class="eoi_7w6aq"/><path class="yq5yyzb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nintendo-switch"} {...others} />);
}

export default Component;
