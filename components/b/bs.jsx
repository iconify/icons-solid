import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9ae8841e.css';
import '../../css/t/t_lyayb9w.css';
import '../../css/m/mqzz-ccdn.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="z9ae8841e"/><path class="t_lyayb9w"/><path class="mqzz-ccdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bs"} {...others} />);
}

export default Component;
