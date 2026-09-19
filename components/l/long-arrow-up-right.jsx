import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nism3h_oq.css';
import '../../css/p/pul65i6my.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nism3h_oq"/><path class="pul65i6my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-up-right"} {...others} />);
}

export default Component;
