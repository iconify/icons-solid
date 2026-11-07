import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oytsnpbqo.css';
import '../../css/u/ukrhpwb6i.css';
import '../../css/q/qe32f93df.css';
import '../../css/g/g_ou44-_q.css';
import '../../css/v/vk9n4wbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oytsnpbqo"/><path class="ukrhpwb6i"/><g clip-rule="evenodd" class="qe32f93df"><path class="g_ou44-_q"/><path class="vk9n4wbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-bold-duotone"} {...others} />);
}

export default Component;
