import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdfol04mj.css';
import '../../css/b/b30bw2w4y.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="hdfol04mj"/><path class="b30bw2w4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:odnoklassniki"} {...others} />);
}

export default Component;
