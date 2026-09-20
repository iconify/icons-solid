import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bcs__wbtm.css';
import '../../css/y/yndnxvb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="bcs__wbtm"/><path class="yndnxvb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-light"} {...others} />);
}

export default Component;
