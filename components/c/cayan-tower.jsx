import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ln862-baf.css';
import '../../css/p/p5dy8sbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ln862-baf"/><path class="p5dy8sbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cayan-tower"} {...others} />);
}

export default Component;
