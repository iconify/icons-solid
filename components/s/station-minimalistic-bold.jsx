import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcke6rbgw.css';
import '../../css/x/xkxu1ibgd.css';
import '../../css/r/r_13o9i8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fcke6rbgw"/><path class="xkxu1ibgd"/><path clip-rule="evenodd" class="r_13o9i8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-bold"} {...others} />);
}

export default Component;
