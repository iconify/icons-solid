import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu293jbai.css';
import '../../css/y/yevybxblx.css';
import '../../css/p/pay1cacov.css';
import '../../css/j/j7dqz0b5m.css';
import '../../css/l/lwj5uex8y.css';
import '../../css/m/myjb0abfw.css';
import '../../css/y/ye3evqb_b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zu293jbai"/><path class="yevybxblx"/><path class="pay1cacov"/><path class="j7dqz0b5m"/><path class="lwj5uex8y"/><path class="myjb0abfw"/><path class="ye3evqb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pigeonpod"} {...others} />);
}

export default Component;
