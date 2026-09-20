import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfrhk1b-s.css';
import '../../css/a/a58ac9brq.css';
import '../../css/c/c8x8g5sqh.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="dfrhk1b-s"/><path class="a58ac9brq"/><circle class="c8x8g5sqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:instagram"} {...others} />);
}

export default Component;
