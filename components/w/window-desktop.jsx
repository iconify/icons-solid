import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s577vrczu.css';
import '../../css/q/qf3ier63m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="s577vrczu"/><path class="qf3ier63m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:window-desktop"} {...others} />);
}

export default Component;
