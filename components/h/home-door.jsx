import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i5dnz5ika.css';
import '../../css/o/orig8rbxl.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="i5dnz5ika"/><path class="orig8rbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:home-door"} {...others} />);
}

export default Component;
