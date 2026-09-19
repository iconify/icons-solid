import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dts-kxr-c.css';
import '../../css/r/r7ts6o96m.css';

const viewBox = {"width":38,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dts-kxr-c"/><path class="r7ts6o96m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:briefcase"} {...others} />);
}

export default Component;
