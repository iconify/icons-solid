import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vv5h-96aa.css';
import '../../css/y/y7wod1b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vv5h-96aa"/><path clip-rule="evenodd" class="y7wod1b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:monitor"} {...others} />);
}

export default Component;
