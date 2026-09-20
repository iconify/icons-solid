import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nj_blobin.css';
import '../../css/h/h-o21yhdy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nj_blobin"/><path class="h-o21yhdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-warning"} {...others} />);
}

export default Component;
