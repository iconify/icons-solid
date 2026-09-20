import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flsjjbbyo.css';
import '../../css/o/otya63-fh.css';
import '../../css/s/snjugrb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="flsjjbbyo"/><path clip-rule="evenodd" class="otya63-fh"/><path class="snjugrb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
