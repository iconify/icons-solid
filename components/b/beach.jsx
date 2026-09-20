import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmhppnjtp.css';
import '../../css/y/yle63cbew.css';
import '../../css/h/h84tzd74r.css';
import '../../css/o/oe-_9db0s.css';
import '../../css/a/a1yitac1e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nmhppnjtp"/><path class="yle63cbew"/><path class="h84tzd74r"/><path class="oe-_9db0s"/><path class="a1yitac1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:beach"} {...others} />);
}

export default Component;
