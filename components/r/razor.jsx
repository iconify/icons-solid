import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tv71cpgsx.css';
import '../../css/l/ll03k5bwa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tv71cpgsx"/><path class="ll03k5bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:razor"} {...others} />);
}

export default Component;
