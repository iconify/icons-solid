import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9n8s9yzc.css';
import '../../css/s/s28t97b1i.css';
import '../../css/o/ozkqvubnt.css';
import '../../css/t/ttvacacma.css';
import '../../css/e/ekrqtg6xg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r9n8s9yzc"/><path class="s28t97b1i"/><path class="ozkqvubnt"/><path class="ttvacacma"/><path class="ekrqtg6xg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-speech"} {...others} />);
}

export default Component;
