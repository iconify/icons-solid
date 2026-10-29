import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jfb-yjbgw.css';
import '../../css/q/qaz17vbsh.css';
import '../../css/k/kwybaobhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jfb-yjbgw"/><path class="qaz17vbsh"/><path class="kwybaobhx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-marked"} {...others} />);
}

export default Component;
