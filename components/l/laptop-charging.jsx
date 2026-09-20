import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zknnki1nl.css';
import '../../css/n/n3kx5ciqj.css';
import '../../css/d/d146v5ukl.css';
import '../../css/g/gmwy4vbxs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zknnki1nl"/><path class="n3kx5ciqj"/><path class="d146v5ukl"/><path class="gmwy4vbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:laptop-charging"} {...others} />);
}

export default Component;
