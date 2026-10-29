import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t9g5kvbye.css';
import '../../css/t/trdla8jeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t9g5kvbye"/><path class="trdla8jeo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-list"} {...others} />);
}

export default Component;
