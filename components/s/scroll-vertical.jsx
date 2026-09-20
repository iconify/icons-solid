import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alk-q2_rf.css';
import '../../css/e/elwgrpb9e.css';
import '../../css/n/n5fz7mb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="alk-q2_rf"/><path class="elwgrpb9e"/><path class="n5fz7mb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:scroll-vertical"} {...others} />);
}

export default Component;
