import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iadqdtbkh.css';
import '../../css/q/qpnbo7btr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="iadqdtbkh"/><path class="qpnbo7btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:convenience-store"} {...others} />);
}

export default Component;
