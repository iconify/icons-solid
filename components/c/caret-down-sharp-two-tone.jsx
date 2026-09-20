import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k384k8b7z.css';
import '../../css/g/gxhti5bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="k384k8b7z"/><path class="gxhti5bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-down-sharp-two-tone"} {...others} />);
}

export default Component;
