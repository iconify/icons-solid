import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di_c8abhj.css';
import '../../css/h/honwc8-_b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="di_c8abhj"/><path clip-rule="evenodd" class="honwc8-_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rock-and-roll-hand-flat"} {...others} />);
}

export default Component;
