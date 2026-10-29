import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/so6echbcc.css';
import '../../css/a/ao0rkfefr.css';
import '../../css/g/gg5uzfbci.css';
import '../../css/k/ky5cbpbbs.css';
import '../../css/q/qaio0kbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="so6echbcc"/><path class="ao0rkfefr wm-a"/><path class="gg5uzfbci wm-a"/><path class="ky5cbpbbs"/><path class="qaio0kbxd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-tool-duo"} {...others} />);
}

export default Component;
