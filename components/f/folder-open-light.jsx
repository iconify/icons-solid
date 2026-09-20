import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ymb87aben.css';
import '../../css/v/vqaiqwb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ymb87aben"/><path class="vqaiqwb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-open-light"} {...others} />);
}

export default Component;
