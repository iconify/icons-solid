import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccbtvzb6r.css';
import '../../css/c/ci0uidb4r.css';
import '../../css/q/q3wljubyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ccbtvzb6r"/><path class="ci0uidb4r"/><path class="q3wljubyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:grid-2x2-2"} {...others} />);
}

export default Component;
