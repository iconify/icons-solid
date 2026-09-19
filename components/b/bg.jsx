import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkj7k3b9y.css';
import '../../css/e/ebwoi37kk.css';
import '../../css/t/tenprb2cu.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="vkj7k3b9y"/><path class="ebwoi37kk"/><path class="tenprb2cu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bg"} {...others} />);
}

export default Component;
