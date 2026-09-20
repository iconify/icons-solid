import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc8_piqts.css';
import '../../css/a/amtsbybzq.css';
import '../../css/o/o8bzarb7b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rc8_piqts"/><path class="amtsbybzq"/><path class="o8bzarb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:h3"} {...others} />);
}

export default Component;
