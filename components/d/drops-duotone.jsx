import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r82adyb7b.css';
import '../../css/h/hj8ko8a3r.css';
import '../../css/t/tf1lulb6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r82adyb7b"/><path class="hj8ko8a3r"/><path class="tf1lulb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:drops-duotone"} {...others} />);
}

export default Component;
