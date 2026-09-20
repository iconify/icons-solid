import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sp5az2tjt.css';
import '../../css/k/k0_w5i52u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sp5az2tjt"/><path class="k0_w5i52u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:surveillance-camera"} {...others} />);
}

export default Component;
