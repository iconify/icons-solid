import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv--zb7jx.css';
import '../../css/v/v_qpfkblz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yv--zb7jx"/><path class="v_qpfkblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:crane"} {...others} />);
}

export default Component;
