import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwp374b1w.css';
import '../../css/b/bvt-woblq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vwp374b1w"/><path class="bvt-woblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-linear"} {...others} />);
}

export default Component;
