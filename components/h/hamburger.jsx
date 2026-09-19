import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7z8vcc8d.css';
import '../../css/u/ubl8dikcv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n7z8vcc8d"/><path class="ubl8dikcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hamburger"} {...others} />);
}

export default Component;
