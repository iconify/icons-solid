import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st7pjzbdn.css';
import '../../css/a/aq-s7qbbu.css';
import '../../css/e/eknzlevqo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="st7pjzbdn"/><path clip-rule="evenodd" class="aq-s7qbbu"/><path class="eknzlevqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:camera-tripod-flat"} {...others} />);
}

export default Component;
