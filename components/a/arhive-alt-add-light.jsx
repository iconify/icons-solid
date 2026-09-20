import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/ryesi_dfm.css';
import '../../css/k/ktxmo2-dm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ryesi_dfm"/><path class="ktxmo2-dm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-add-light"} {...others} />);
}

export default Component;
