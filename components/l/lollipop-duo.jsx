import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o0sdqdbaj.css';
import '../../css/m/mye-p1bbs.css';
import '../../css/g/giai2jb9v.css';
import '../../css/d/dm7wguq1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o0sdqdbaj"/><path class="mye-p1bbs wm-a"/><path class="giai2jb9v"/><path class="dm7wguq1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lollipop-duo"} {...others} />);
}

export default Component;
