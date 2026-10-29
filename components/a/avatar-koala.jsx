import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p61yw8uba.css';
import '../../css/g/g_x203bjf.css';
import '../../css/e/egfkty-mb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p61yw8uba"/><path class="g_x203bjf"/><path class="egfkty-mb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-koala"} {...others} />);
}

export default Component;
