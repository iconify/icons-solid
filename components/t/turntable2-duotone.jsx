import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eiq0qzbhx.css';
import '../../css/v/vc9yvwb-z.css';
import '../../css/e/e5yj4rbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eiq0qzbhx"/><path class="vc9yvwb-z"/><path class="e5yj4rbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:turntable2-duotone"} {...others} />);
}

export default Component;
