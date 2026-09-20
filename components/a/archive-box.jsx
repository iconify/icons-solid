import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyg7jiy9l.css';
import '../../css/p/pi4sylbxa.css';
import '../../css/y/ye-fe69zy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="iyg7jiy9l"/><path clip-rule="evenodd" class="pi4sylbxa"/><path class="ye-fe69zy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:archive-box"} {...others} />);
}

export default Component;
