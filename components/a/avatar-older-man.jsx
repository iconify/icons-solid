import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/o/ohub8bxaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bg3dj-bbo"/><path class="ohub8bxaj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-man"} {...others} />);
}

export default Component;
