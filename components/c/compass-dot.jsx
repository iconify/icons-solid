import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4rxo9gpl.css';
import '../../css/o/or9a92b3r.css';
import '../../css/t/t076rfbic.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="p4rxo9gpl"/><path class="or9a92b3r"/><path class="t076rfbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:compass-dot"} {...others} />);
}

export default Component;
