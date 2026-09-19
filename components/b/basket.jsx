import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0bge4cqz.css';
import '../../css/l/l05nigbse.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a0bge4cqz"/><path class="l05nigbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:basket"} {...others} />);
}

export default Component;
