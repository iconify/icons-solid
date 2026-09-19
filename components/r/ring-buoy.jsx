import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se00zpnsh.css';
import '../../css/c/cyd1o9bus.css';
import '../../css/k/kqz3dbcpw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="se00zpnsh"/><path class="cyd1o9bus"/><path class="kqz3dbcpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ring-buoy"} {...others} />);
}

export default Component;
