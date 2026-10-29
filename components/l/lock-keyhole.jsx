import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hmb0o_-2y.css';
import '../../css/b/b86buo32x.css';
import '../../css/d/dyvgatb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hmb0o_-2y wm-a"/><path class="b86buo32x"/><path class="dyvgatb7a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-keyhole"} {...others} />);
}

export default Component;
