import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acg8t5b_l.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/a/a5du-9wed.css';
import '../../css/q/q6hj83b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="acg8t5b_l"/><path class="ay1qmvbxn"/><path class="a5du-9wed"/><path clip-rule="evenodd" class="q6hj83b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-outline"} {...others} />);
}

export default Component;
