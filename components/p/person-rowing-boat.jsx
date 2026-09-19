import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp2bgyiul.css';
import '../../css/x/xi28nxida.css';
import '../../css/n/n_0_5x3qc.css';
import '../../css/j/jx8wicb2x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vp2bgyiul"/><path class="xi28nxida"/><path class="n_0_5x3qc"/><path class="jx8wicb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-rowing-boat"} {...others} />);
}

export default Component;
