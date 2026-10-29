import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tx1l_fszj.css';
import '../../css/a/aydzuvbkz.css';
import '../../css/k/kjyj4ubca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tx1l_fszj"/><path class="aydzuvbkz wm-a"/><path class="kjyj4ubca wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gavel"} {...others} />);
}

export default Component;
