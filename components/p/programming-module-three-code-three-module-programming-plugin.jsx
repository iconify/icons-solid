import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f-bh_mprb.css';
import '../../css/c/c07q9b5pt.css';
import '../../css/z/zpd4nibtx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="f-bh_mprb"/><rect class="c07q9b5pt"/><rect class="zpd4nibtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-module-three-code-three-module-programming-plugin"} {...others} />);
}

export default Component;
