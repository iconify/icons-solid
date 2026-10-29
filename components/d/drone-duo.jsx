import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s5vm4tbxd.css';
import '../../css/s/snvjfcboq.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s5vm4tbxd"/><path class="snvjfcboq wm-a"/><path class="hr07nwq7t"/><path class="t96a34een wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drone-duo"} {...others} />);
}

export default Component;
