import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/svav8jh5q.css';
import '../../css/d/dikszcc_o.css';
import '../../css/s/sjl2bfbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="svav8jh5q"/><path class="dikszcc_o wm-a"/><path class="sjl2bfbwr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:party-popper"} {...others} />);
}

export default Component;
