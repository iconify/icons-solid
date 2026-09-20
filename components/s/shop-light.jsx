import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/smffg765a.css';
import '../../css/w/w7q8b6bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="smffg765a"/><path class="w7q8b6bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:shop-light"} {...others} />);
}

export default Component;
