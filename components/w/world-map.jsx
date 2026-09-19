import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a170ynmch.css';
import '../../css/q/q9x9gxaal.css';
import '../../css/z/z7k5akbjt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a170ynmch"/><path class="q9x9gxaal"/><path class="z7k5akbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:world-map"} {...others} />);
}

export default Component;
