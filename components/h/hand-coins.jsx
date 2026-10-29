import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yy33eebqt.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/k/kd4jkuf5m.css';
import '../../css/j/j_5p8mbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm-a yy33eebqt"/><path class="i-e0xfb7g"/><path class="kd4jkuf5m wm-a"/><path class="j_5p8mbom wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-coins"} {...others} />);
}

export default Component;
