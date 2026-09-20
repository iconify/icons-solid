import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3fx5nemq.css';
import '../../css/k/knckjdbay.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k3fx5nemq"/><path class="knckjdbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:label"} {...others} />);
}

export default Component;
