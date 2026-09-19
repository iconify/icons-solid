import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6c0khbqi.css';
import '../../css/y/ydxs5zd1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y6c0khbqi"/><path class="ydxs5zd1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:css-3"} {...others} />);
}

export default Component;
