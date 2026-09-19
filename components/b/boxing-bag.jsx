import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohixrvbsc.css';
import '../../css/w/w3ct1cuzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ohixrvbsc"/><path class="w3ct1cuzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:boxing-bag"} {...others} />);
}

export default Component;
