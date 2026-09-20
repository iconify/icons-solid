import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kldeo4bbz.css';
import '../../css/w/wvuj0bbds.css';
import '../../css/i/ir9c1ubht.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kldeo4bbz"/><path class="wvuj0bbds"/><path class="ir9c1ubht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:help-chat-1"} {...others} />);
}

export default Component;
