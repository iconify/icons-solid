import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmrtfwbyk.css';
import '../../css/o/omua7k0ch.css';
import '../../css/f/fgxrb3bou.css';
import '../../css/h/hw1lekbqa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hmrtfwbyk"/><path class="omua7k0ch"/><path class="fgxrb3bou"/><path class="hw1lekbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flying-disc"} {...others} />);
}

export default Component;
