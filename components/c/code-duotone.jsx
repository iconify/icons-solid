import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc4q38k8f.css';
import '../../css/m/mii5dhp2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zc4q38k8f"/><path class="mii5dhp2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:code-duotone"} {...others} />);
}

export default Component;
