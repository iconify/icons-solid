import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y738jwn9u.css';
import '../../css/s/s0r4vz39r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y738jwn9u"/><path class="s0r4vz39r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:thumbs-down-sharp-duotone"} {...others} />);
}

export default Component;
