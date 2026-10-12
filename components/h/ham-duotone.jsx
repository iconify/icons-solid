import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-9w70bia.css';
import '../../css/d/dadvgibzl.css';
import '../../css/r/rb9rifbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z-9w70bia"/><path class="dadvgibzl"/><path class="rb9rifbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ham-duotone"} {...others} />);
}

export default Component;
