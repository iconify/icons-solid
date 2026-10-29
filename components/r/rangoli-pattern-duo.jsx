import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ycr-ska1h.css';
import '../../css/p/p24ykb6pq.css';
import '../../css/w/wbjyenbnm.css';
import '../../css/x/xa2hfrbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ycr-ska1h"/><path class="p24ykb6pq wm-a"/><path class="wbjyenbnm wm-a"/><path class="xa2hfrbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rangoli-pattern-duo"} {...others} />);
}

export default Component;
