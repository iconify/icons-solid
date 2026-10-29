import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zj-cn9tqh.css';
import '../../css/n/nlfb8obhi.css';
import '../../css/m/mzsw-jb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zj-cn9tqh"/><path class="nlfb8obhi wm-a"/><path class="mzsw-jb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-plus-duo"} {...others} />);
}

export default Component;
