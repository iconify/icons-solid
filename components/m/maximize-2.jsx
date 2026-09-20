import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u8ox48bpd.css';
import '../../css/r/rn26afbsb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u8ox48bpd"/><path class="rn26afbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:maximize-2"} {...others} />);
}

export default Component;
