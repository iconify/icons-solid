import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tf_kryblx.css';
import '../../css/h/hweutsbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tf_kryblx"/><path class="hweutsbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:u-turn-arrow-left"} {...others} />);
}

export default Component;
