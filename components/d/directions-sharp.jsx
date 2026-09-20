import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxsluibud.css';
import '../../css/m/mg3ip9u7s.css';
import '../../css/a/abc2udchl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cxsluibud"/><path class="mg3ip9u7s"/><path class="abc2udchl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:directions-sharp"} {...others} />);
}

export default Component;
