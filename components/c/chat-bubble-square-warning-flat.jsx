import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svpp842ub.css';
import '../../css/l/lecm01a-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="svpp842ub"/><path clip-rule="evenodd" class="lecm01a-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chat-bubble-square-warning-flat"} {...others} />);
}

export default Component;
