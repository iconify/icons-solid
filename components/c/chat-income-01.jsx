import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/akc4ntbyu.css';
import '../../css/j/ji5w_2b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="akc4ntbyu"/><path class="ji5w_2b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-income-01"} {...others} />);
}

export default Component;
