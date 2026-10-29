import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/suq9n5bcz.css';
import '../../css/u/uya6wcbfz.css';
import '../../css/k/k4kerw0_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="suq9n5bcz"/><path class="uya6wcbfz wm-a"/><path class="k4kerw0_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-cane-duo"} {...others} />);
}

export default Component;
