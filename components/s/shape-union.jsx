import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk58k2bhu.css';
import '../../css/d/dlev4xbhi.css';
import '../../css/c/cq3__acdk.css';
import '../../css/q/qao85dy3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vk58k2bhu"/><path class="dlev4xbhi"/><path class="cq3__acdk"/><path class="qao85dy3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:shape-union"} {...others} />);
}

export default Component;
