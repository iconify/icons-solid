import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uzj4pbz7k.css';
import '../../css/f/fjdu8ejaj.css';

const viewBox = {"width":2048,"height":2048};
const content = `<g class="h01tyzbfu"><path transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)" class="uzj4pbz7k"/><path transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)" class="fjdu8ejaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:text-annotation"} {...others} />);
}

export default Component;
