import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4eqebb1f.css';
import '../../css/o/omhuwgbnv.css';
import '../../css/t/tk3xwsbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b4eqebb1f"/><path class="omhuwgbnv"/><path class="tk3xwsbbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:move-horizontal"} {...others} />);
}

export default Component;
