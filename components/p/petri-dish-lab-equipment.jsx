import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/i/it6zx1v7j.css';
import '../../css/y/y295kubtu.css';
import '../../css/e/er6ve5n2i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path clip-rule="evenodd" class="it6zx1v7j"/><path class="y295kubtu"/><path class="er6ve5n2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:petri-dish-lab-equipment"} {...others} />);
}

export default Component;
