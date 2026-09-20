import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu6v12w9j.css';
import '../../css/o/oz5k24b5z.css';
import '../../css/p/p0a_xzbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uu6v12w9j"/><path class="oz5k24b5z"/><path class="p0a_xzbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:routing-duotone"} {...others} />);
}

export default Component;
