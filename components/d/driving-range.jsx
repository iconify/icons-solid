import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0kjutbcv.css';
import '../../css/p/pt-wyxbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q0kjutbcv"/><path class="pt-wyxbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:driving-range"} {...others} />);
}

export default Component;
