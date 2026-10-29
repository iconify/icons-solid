import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wtb2hvqtq.css';
import '../../css/j/j79vh-b8k.css';
import '../../css/s/sjvkn5w2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wtb2hvqtq"/><path class="j79vh-b8k wm-a"/><path class="sjvkn5w2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rabbit-duo"} {...others} />);
}

export default Component;
