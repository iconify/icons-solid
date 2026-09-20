import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/taf7a5bvn.css';
import '../../css/l/lr7dwlf_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="taf7a5bvn"/><path class="lr7dwlf_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hospital3"} {...others} />);
}

export default Component;
