import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5r_9-b1t.css';
import '../../css/p/p4a20b46n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f5r_9-b1t"/><path class="p4a20b46n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-game"} {...others} />);
}

export default Component;
