import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/n/nuq9sybcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m6i-bjqet"/><path class="nuq9sybcn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indent-decrease"} {...others} />);
}

export default Component;
