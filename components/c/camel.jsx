import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyem04bnp.css';
import '../../css/l/lt-wzybgs.css';
import '../../css/v/vcu5axb8g.css';
import '../../css/c/cihjl83ho.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pyem04bnp"/><path class="lt-wzybgs"/><path class="vcu5axb8g"/><path class="cihjl83ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:camel"} {...others} />);
}

export default Component;
