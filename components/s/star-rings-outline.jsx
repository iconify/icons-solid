import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1nmznbff.css';
import '../../css/d/dyy63hbaz.css';
import '../../css/y/y3q2v7bge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j1nmznbff"/><path class="dyy63hbaz"/><path class="y3q2v7bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-outline"} {...others} />);
}

export default Component;
