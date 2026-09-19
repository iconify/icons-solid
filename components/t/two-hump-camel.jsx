import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-k0ckb_g.css';
import '../../css/v/v13bn1brl.css';
import '../../css/t/tvhq1ibax.css';
import '../../css/o/o5uu1xyej.css';
import '../../css/i/iklvdsbxr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="i-k0ckb_g"/><path class="v13bn1brl"/><path class="tvhq1ibax"/><path class="o5uu1xyej"/><path class="iklvdsbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:two-hump-camel"} {...others} />);
}

export default Component;
