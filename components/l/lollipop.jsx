import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/giai2jb9v.css';
import '../../css/d/dm7wguq1j.css';
import '../../css/m/mye-p1bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="giai2jb9v"/><path class="dm7wguq1j"/><path class="mye-p1bbs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lollipop"} {...others} />);
}

export default Component;
