import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zke4o0bej.css';
import '../../css/a/abaeg1b0m.css';
import '../../css/o/o6zvk_wpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zke4o0bej"/><path clip-rule="evenodd" class="abaeg1b0m"/><path class="o6zvk_wpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hourglass-line-bold-duotone"} {...others} />);
}

export default Component;
