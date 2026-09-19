import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9k4_7rlb.css';
import '../../css/z/zcju4pb8f.css';

const viewBox = {"width":27,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x9k4_7rlb"/><path class="zcju4pb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:notebook"} {...others} />);
}

export default Component;
