import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pplclmbsn.css';
import '../../css/c/clcfyob1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pplclmbsn"/><path class="clcfyob1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-up-light"} {...others} />);
}

export default Component;
