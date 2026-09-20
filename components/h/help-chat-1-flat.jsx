import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjso9kbip.css';
import '../../css/f/f-foe1buu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pjso9kbip"/><path clip-rule="evenodd" class="f-foe1buu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:help-chat-1-flat"} {...others} />);
}

export default Component;
