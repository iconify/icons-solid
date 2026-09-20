import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r4s1crbcx.css';
import '../../css/k/krgk-cb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect transform="rotate(90 12 6.667)" class="r4s1crbcx"/><rect transform="rotate(90 8 17.333)" class="krgk-cb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-left"} {...others} />);
}

export default Component;
