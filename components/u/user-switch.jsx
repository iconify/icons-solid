import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf-hi6bgl.css';
import '../../css/a/a8neukw-z.css';
import '../../css/m/m6iic4zxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qf-hi6bgl"/><circle class="a8neukw-z"/><path class="m6iic4zxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-switch"} {...others} />);
}

export default Component;
