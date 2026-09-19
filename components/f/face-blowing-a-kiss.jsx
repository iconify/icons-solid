import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2c910baj.css';
import '../../css/d/dq4jskbps.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="r2c910baj"/><path class="dq4jskbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-blowing-a-kiss"} {...others} />);
}

export default Component;
