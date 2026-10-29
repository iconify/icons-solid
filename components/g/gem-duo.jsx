import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mr0gc7bvl.css';
import '../../css/d/dbqmg1f3w.css';
import '../../css/u/uzvf5obnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mr0gc7bvl"/><path class="dbqmg1f3w"/><path class="uzvf5obnx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gem-duo"} {...others} />);
}

export default Component;
