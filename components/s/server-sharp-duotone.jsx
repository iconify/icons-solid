import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2dca3b4z.css';
import '../../css/b/b28tj_i5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y2dca3b4z"/><path class="b28tj_i5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:server-sharp-duotone"} {...others} />);
}

export default Component;
