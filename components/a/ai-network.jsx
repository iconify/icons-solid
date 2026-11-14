import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvfl3fbbc.css';
import '../../css/q/q7oonn27c.css';
import '../../css/d/d02nshtjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dvfl3fbbc"/><path class="q7oonn27c"/><path class="d02nshtjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-network"} {...others} />);
}

export default Component;
