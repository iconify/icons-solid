import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kp848b4hn.css';
import '../../css/w/w97cv4bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kp848b4hn"/><path class="w97cv4bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-y-light"} {...others} />);
}

export default Component;
