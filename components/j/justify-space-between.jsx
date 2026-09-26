import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cmhb2q1wl.css';
import '../../css/l/lsg8msbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cmhb2q1wl"/><path vector-effect="non-scaling-stroke" class="lsg8msbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:justify-space-between"} {...others} />);
}

export default Component;
