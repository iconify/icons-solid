import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_97fg8eh.css';
import '../../css/w/wavz00y0u.css';
import '../../css/e/ep6j6hbsb.css';
import '../../css/v/vk2djvbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t_97fg8eh"/><path class="wavz00y0u"/><circle class="ep6j6hbsb"/><path class="vk2djvbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-prohibit"} {...others} />);
}

export default Component;
