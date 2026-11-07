import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sszotns8l.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/ucxixg8jo.css';
import '../../css/r/rl4sfbcqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sszotns8l"/><g class="xtpeb-edw"><path class="ucxixg8jo"/><path class="rl4sfbcqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-down-left-bold-duotone"} {...others} />);
}

export default Component;
