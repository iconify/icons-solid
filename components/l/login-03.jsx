import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gpt_3w-gb.css';
import '../../css/q/q32uyd7nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gpt_3w-gb"/><path class="q32uyd7nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:login-03"} {...others} />);
}

export default Component;
