import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpxt3bcgc.css';
import '../../css/j/j-uhwzbaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hpxt3bcgc"/><path class="j-uhwzbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:smartphone-device"} {...others} />);
}

export default Component;
