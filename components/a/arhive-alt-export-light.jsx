import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/ktxmo2-dm.css';
import '../../css/c/cppokfbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ktxmo2-dm"/><path class="cppokfbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-export-light"} {...others} />);
}

export default Component;
