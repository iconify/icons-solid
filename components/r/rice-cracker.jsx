import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-erfgb3a.css';
import '../../css/g/ght0o1b9j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u-erfgb3a"/><path class="ght0o1b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:rice-cracker"} {...others} />);
}

export default Component;
