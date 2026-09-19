import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0ucgrbcj.css';
import '../../css/f/f5ba_3sxu.css';
import '../../css/b/b8uccrj4v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="k0ucgrbcj"/><path class="f5ba_3sxu"/><path class="b8uccrj4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:grenade"} {...others} />);
}

export default Component;
