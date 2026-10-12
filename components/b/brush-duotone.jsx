import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk43r2bac.css';
import '../../css/g/gis6iufnu.css';
import '../../css/w/w0-ba4bwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vk43r2bac"/><path class="gis6iufnu"/><path class="w0-ba4bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brush-duotone"} {...others} />);
}

export default Component;
