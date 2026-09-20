import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/op24dvl4v.css';
import '../../css/h/hbcfabcbl.css';
import '../../css/r/rsqrtukoj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="op24dvl4v"/><path class="hbcfabcbl"/><path class="rsqrtukoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-bold"} {...others} />);
}

export default Component;
