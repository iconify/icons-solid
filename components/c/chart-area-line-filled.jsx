import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1sojsb3n.css';
import '../../css/t/tyt1h6b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h1sojsb3n"/><path class="tyt1h6b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-area-line-filled"} {...others} />);
}

export default Component;
