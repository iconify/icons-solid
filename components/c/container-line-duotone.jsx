import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jeopszbig.css';
import '../../css/x/xtp4t3bcd.css';
import '../../css/f/f6nuepbyg.css';
import '../../css/p/pnozs4hcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jeopszbig"/><path class="xtp4t3bcd"/><path class="f6nuepbyg"/><path class="pnozs4hcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-line-duotone"} {...others} />);
}

export default Component;
