import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgpnbnt1e.css';
import '../../css/u/udp4m0b2t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qgpnbnt1e"/><path class="udp4m0b2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:cloud-arrow-down"} {...others} />);
}

export default Component;
