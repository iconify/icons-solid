import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mefryhuto.css';
import '../../css/x/xlm5w-bhh.css';
import '../../css/j/j10ehyblf.css';
import '../../css/j/jljkj-bjl.css';
import '../../css/p/p88jhsbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mefryhuto"/><path class="wm-s xlm5w-bhh"/><path class="j10ehyblf wm-s"/><path class="jljkj-bjl"/><path class="p88jhsbpe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-pen-duo"} {...others} />);
}

export default Component;
