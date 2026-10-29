import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/srstqryqt.css';
import '../../css/r/ro6ni4ihy.css';
import '../../css/e/eug742r3l.css';
import '../../css/h/h-xt0z5nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="srstqryqt"/><path class="ro6ni4ihy wm-a"/><path class="eug742r3l"/><path class="h-xt0z5nn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:citrus-duo"} {...others} />);
}

export default Component;
