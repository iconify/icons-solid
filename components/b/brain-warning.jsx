import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/x/xr-srrbas.css';
import '../../css/s/ss0pp_b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="xr-srrbas"/><path class="ss0pp_b_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:brain-warning"} {...others} />);
}

export default Component;
