import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb0p7xb6u.css';
import '../../css/m/m5mjumbjq.css';
import '../../css/w/wuc5wnb3m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jb0p7xb6u"/><path class="m5mjumbjq"/><path class="wuc5wnb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mail-send-envelope"} {...others} />);
}

export default Component;
