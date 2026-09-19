import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gh90unbsv.css';
import '../../css/i/i6ut9l4iq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gh90unbsv"/><path class="i6ut9l4iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:zebra"} {...others} />);
}

export default Component;
