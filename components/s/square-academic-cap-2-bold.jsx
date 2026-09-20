import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asgo7gbiy.css';
import '../../css/v/vido6rbat.css';
import '../../css/n/nbadl6rrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="asgo7gbiy"/><path class="vido6rbat"/><path class="nbadl6rrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-2-bold"} {...others} />);
}

export default Component;
