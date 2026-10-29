import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vvf-p8mwk.css';
import '../../css/j/jzul1pbjt.css';
import '../../css/u/ukna4qm-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vvf-p8mwk"/><path class="jzul1pbjt wm-a"/><path class="ukna4qm-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cactus-duo"} {...others} />);
}

export default Component;
