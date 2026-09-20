import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ly-p7gg9e.css';
import '../../css/j/jv4g7pbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ly-p7gg9e"/><path vector-effect="non-scaling-stroke" class="jv4g7pbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:video"} {...others} />);
}

export default Component;
