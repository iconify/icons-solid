import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ho8fg47mx.css';
import '../../css/x/x98phdbwu.css';
import '../../css/o/o6woyudfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ho8fg47mx"/><path clip-rule="evenodd" class="x98phdbwu"/><path class="o6woyudfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:video-close-captioning-flat"} {...others} />);
}

export default Component;
