import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4q5tcbyx.css';
import '../../css/n/nd185z8sm.css';
import '../../css/d/d7bq5xjoc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4q5tcbyx"/><path class="nd185z8sm"/><path class="d7bq5xjoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-sale-outline"} {...others} />);
}

export default Component;
