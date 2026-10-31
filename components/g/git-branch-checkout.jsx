import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xv0-mjq3d.css';
import '../../css/k/kmyxcmbwl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xv0-mjq3d"/><path class="kmyxcmbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:git-branch-checkout"} {...others} />);
}

export default Component;
