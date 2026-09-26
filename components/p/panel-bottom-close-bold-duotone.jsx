import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujjms90kd.css';
import '../../css/v/vm68qtbnt.css';
import '../../css/m/mjf9o-3hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujjms90kd"/><path class="vm68qtbnt"/><path class="mjf9o-3hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-close-bold-duotone"} {...others} />);
}

export default Component;
