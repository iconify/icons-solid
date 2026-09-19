import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/oc0vi5bvd.css';
import '../../css/n/n09t0lk8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="oc0vi5bvd"/><path class="n09t0lk8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin-off"} {...others} />);
}

export default Component;
