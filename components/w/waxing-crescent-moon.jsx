import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aiqa99bay.css';
import '../../css/b/b52msv7qv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="aiqa99bay"/><path class="b52msv7qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:waxing-crescent-moon"} {...others} />);
}

export default Component;
