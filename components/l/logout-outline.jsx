import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/carmwq-6l.css';
import '../../css/m/mp961hega.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="carmwq-6l"/><path class="mp961hega"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-outline"} {...others} />);
}

export default Component;
