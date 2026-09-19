import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q090uwjry.css';
import '../../css/i/ieugd0b5m.css';
import '../../css/v/vl8-sqjuk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="q090uwjry"/><path class="ieugd0b5m"/><path class="vl8-sqjuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:broken-chain"} {...others} />);
}

export default Component;
