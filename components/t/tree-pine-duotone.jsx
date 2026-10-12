import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdu9bfbqz.css';
import '../../css/c/coganlb0x.css';
import '../../css/s/sbvppdbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xdu9bfbqz"/><path class="coganlb0x"/><path class="sbvppdbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tree-pine-duotone"} {...others} />);
}

export default Component;
