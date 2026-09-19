import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgfg79rry.css';
import '../../css/y/y6gza9ttc.css';

const viewBox = {"width":25,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lgfg79rry"/><path class="y6gza9ttc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:globe"} {...others} />);
}

export default Component;
