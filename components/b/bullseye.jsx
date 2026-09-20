import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8g36nb4x.css';
import '../../css/h/hawj73bow.css';
import '../../css/y/y4sbhjvpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d8g36nb4x"/><path class="hawj73bow"/><path clip-rule="evenodd" class="y4sbhjvpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bullseye"} {...others} />);
}

export default Component;
