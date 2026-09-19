import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dq5t_-42k.css';
import '../../css/p/ppq-0kb9b.css';
import '../../css/d/dg7qrmb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dq5t_-42k"/><path class="ppq-0kb9b"/><path class="dg7qrmb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-video"} {...others} />);
}

export default Component;
