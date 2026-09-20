import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eq3frqb0l.css';
import '../../css/e/e5yr3lx5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eq3frqb0l"/><path class="e5yr3lx5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-replay-linear"} {...others} />);
}

export default Component;
