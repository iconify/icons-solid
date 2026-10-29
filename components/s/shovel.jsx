import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fjzpsmbxy.css';
import '../../css/x/xkg1wybgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fjzpsmbxy"/><path class="wm-a xkg1wybgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shovel"} {...others} />);
}

export default Component;
