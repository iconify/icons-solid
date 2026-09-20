import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/re7o3f85v.css';
import '../../css/y/yndkbgu6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="re7o3f85v"/><path class="yndkbgu6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-euro"} {...others} />);
}

export default Component;
