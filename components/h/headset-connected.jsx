import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5av_5byu.css';
import '../../css/c/cxod47puq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s5av_5byu"/><path class="cxod47puq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:headset-connected"} {...others} />);
}

export default Component;
