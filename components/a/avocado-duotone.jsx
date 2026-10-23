import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rya9mtv8n.css';
import '../../css/y/yt3a_1kmm.css';
import '../../css/v/veoxucbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rya9mtv8n"/><path class="yt3a_1kmm"/><path class="veoxucbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:avocado-duotone"} {...others} />);
}

export default Component;
