import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xv5hb_5sx.css';
import '../../css/g/g136touho.css';
import '../../css/b/bht756bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xv5hb_5sx"/><path class="g136touho wm-a"/><path class="bht756bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:app-window-duo"} {...others} />);
}

export default Component;
