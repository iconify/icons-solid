import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrqrhrbve.css';
import '../../css/z/z5d3x2soa.css';
import '../../css/z/zcirz6n6l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jrqrhrbve"/><path class="z5d3x2soa"/><path class="zcirz6n6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:princess"} {...others} />);
}

export default Component;
