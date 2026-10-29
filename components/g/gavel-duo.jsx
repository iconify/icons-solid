import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/na6msx4zs.css';
import '../../css/k/kjyj4ubca.css';
import '../../css/t/tx1l_fszj.css';
import '../../css/a/aydzuvbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="na6msx4zs"/><path class="kjyj4ubca wm-s"/><path class="tx1l_fszj"/><path class="aydzuvbkz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gavel-duo"} {...others} />);
}

export default Component;
