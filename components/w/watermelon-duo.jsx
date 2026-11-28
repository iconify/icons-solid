import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiwby7ove.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qx_dy3b4t.css';
import '../../css/r/r-k-ywbqs.css';
import '../../css/x/xhj-0cbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary uiwby7ove"/><g class="dt0cm9dhy primary"><path class="qx_dy3b4t"/><path class="r-k-ywbqs"/><path class="xhj-0cbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:watermelon-duo"} {...others} />);
}

export default Component;
