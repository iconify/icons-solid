import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yrr3k8brg.css';
import '../../css/g/g62i1pbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="yrr3k8brg"/><path class="g62i1pbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:verify-outline"} {...others} />);
}

export default Component;
