import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq85fm3yy.css';
import '../../css/y/yvdfwwb_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oq85fm3yy"/><path clip-rule="evenodd" class="yvdfwwb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chat-bubble-oval-smiley-1-flat"} {...others} />);
}

export default Component;
