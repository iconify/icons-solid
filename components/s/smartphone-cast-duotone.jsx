import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2k281qqc.css';
import '../../css/j/j6-4mlbyu.css';
import '../../css/o/oj7ascbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u2k281qqc"/><path class="j6-4mlbyu"/><path class="oj7ascbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-cast-duotone"} {...others} />);
}

export default Component;
