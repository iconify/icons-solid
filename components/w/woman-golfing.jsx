import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/reou0mbaa.css';
import '../../css/m/myqlk289b.css';
import '../../css/m/m2g1aq3zx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="reou0mbaa"/><path class="myqlk289b"/><path class="m2g1aq3zx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-golfing"} {...others} />);
}

export default Component;
