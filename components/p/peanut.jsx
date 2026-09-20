import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt02fdobb.css';
import '../../css/g/g0f4pkbnb.css';
import '../../css/p/p4vhzwb9g.css';
import '../../css/j/jmm_6pidh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt02fdobb"/><path class="g0f4pkbnb"/><path class="p4vhzwb9g"/><path class="jmm_6pidh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peanut"} {...others} />);
}

export default Component;
