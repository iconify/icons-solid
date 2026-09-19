import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5ukf1u_z.css';
import '../../css/s/s-f2414gw.css';
import '../../css/z/zdx0yk9nh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="b5ukf1u_z"/><path clip-rule="evenodd" class="s-f2414gw"/><path class="zdx0yk9nh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:edit-sparkle"} {...others} />);
}

export default Component;
