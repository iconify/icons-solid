import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/roedmt9no.css';
import '../../css/l/l2h7ekg2x.css';
import '../../css/t/te-vwbyvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="roedmt9no"/><path class="l2h7ekg2x"/><path class="te-vwbyvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-2"} {...others} />);
}

export default Component;
