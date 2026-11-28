import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xczynybrx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/ju4crf5-e.css';
import '../../css/z/zxr8z_oqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xczynybrx"/><g class="dt0cm9dhy primary"><path class="ju4crf5-e"/><path class="zxr8z_oqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hdmi-port-duo"} {...others} />);
}

export default Component;
