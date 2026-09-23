import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xozg72bpw.css';
import '../../css/r/r7xk8o29f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xozg72bpw"/><path vector-effect="non-scaling-stroke" class="r7xk8o29f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:justify-space-evenly"} {...others} />);
}

export default Component;
