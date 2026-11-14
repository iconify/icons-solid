import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dl8atjbdm.css';
import '../../css/b/bgsw0kbxi.css';
import '../../css/p/pvr89p5ys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dl8atjbdm"/><path class="bgsw0kbxi"/><path class="pvr89p5ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-brain-02"} {...others} />);
}

export default Component;
