import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm2q5acmg.css';
import '../../css/q/qr1h_rcny.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sm2q5acmg"/><path class="qr1h_rcny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:banjo"} {...others} />);
}

export default Component;
