import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fcet6cbve.css';
import '../../css/m/meogk_ylc.css';
import '../../css/m/me3qcxbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fcet6cbve"/><path class="meogk_ylc wm-a"/><path class="me3qcxbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-check-duo"} {...others} />);
}

export default Component;
