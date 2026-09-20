import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd82r34cq.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/l/lxcy6w0ch.css';
import '../../css/q/qszj7jbei.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jd82r34cq"/><path class="i6axgjb8x"/><path class="lxcy6w0ch"/><path class="qszj7jbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-emoji"} {...others} />);
}

export default Component;
