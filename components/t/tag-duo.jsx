import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c4zeuubly.css';
import '../../css/e/e61c4pwgm.css';
import '../../css/d/dyl9j_8su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c4zeuubly"/><path class="e61c4pwgm wm-a"/><path class="dyl9j_8su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tag-duo"} {...others} />);
}

export default Component;
