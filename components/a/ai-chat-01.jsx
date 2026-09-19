import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ds497pb7g.css';
import '../../css/g/gk9m-f-uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ds497pb7g"/><path class="gk9m-f-uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-chat-01"} {...others} />);
}

export default Component;
