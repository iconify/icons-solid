import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1vm2qsnu.css';
import '../../css/a/atto44bao.css';
import '../../css/h/hlw3r33xs.css';
import '../../css/y/yjt7y95ow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q1vm2qsnu"/><path class="atto44bao wm-a"/><path class="hlw3r33xs"/><path class="wm-a yjt7y95ow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:potted-plant-duo"} {...others} />);
}

export default Component;
