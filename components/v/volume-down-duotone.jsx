import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p96kp1t6i.css';
import '../../css/r/r2n7k2ben.css';
import '../../css/i/ixfa9wv2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p96kp1t6i"/><path class="r2n7k2ben"/><path class="ixfa9wv2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:volume-down-duotone"} {...others} />);
}

export default Component;
