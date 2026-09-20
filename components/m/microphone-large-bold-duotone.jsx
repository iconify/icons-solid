import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2cr9mcky.css';
import '../../css/u/u96ejzb5d.css';
import '../../css/z/ztcxm8u1m.css';
import '../../css/g/goumxdp6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2cr9mcky"/><path class="u96ejzb5d"/><path class="ztcxm8u1m"/><path class="goumxdp6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-large-bold-duotone"} {...others} />);
}

export default Component;
