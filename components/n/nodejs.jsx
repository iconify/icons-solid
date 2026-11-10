import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzgee4bbr.css';
import '../../css/l/lj5u1w66m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzgee4bbr"/><path class="lj5u1w66m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:nodejs"} {...others} />);
}

export default Component;
