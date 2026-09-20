import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nnkidodsc.css';
import '../../css/z/zhdv9cy2b.css';
import '../../css/q/qvem_4fos.css';
import '../../css/u/uvtb2lbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="nnkidodsc"/><path class="zhdv9cy2b"/><path class="qvem_4fos"/><path class="uvtb2lbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:laptop-wifi-2"} {...others} />);
}

export default Component;
