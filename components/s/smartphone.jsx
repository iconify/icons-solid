import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ec9y-vbgq.css';
import '../../css/q/qxzl8mbit.css';
import '../../css/v/vcav8zb4u.css';
import '../../css/z/zkmoqc5yr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ec9y-vbgq"/><path class="qxzl8mbit"/><path clip-rule="evenodd" class="vcav8zb4u"/><path clip-rule="evenodd" class="zkmoqc5yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:smartphone"} {...others} />);
}

export default Component;
