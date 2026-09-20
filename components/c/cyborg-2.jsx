import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vklur-0pt.css';
import '../../css/h/hi4wacccn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vklur-0pt"/><path class="hi4wacccn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cyborg-2"} {...others} />);
}

export default Component;
