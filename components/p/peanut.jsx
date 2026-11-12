import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt02fdobb.css';
import '../../css/b/bbhq1vbgh.css';
import '../../css/l/lt995w-hc.css';
import '../../css/j/jmm_6pidh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt02fdobb"/><path class="bbhq1vbgh"/><path class="lt995w-hc"/><path class="jmm_6pidh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peanut"} {...others} />);
}

export default Component;
