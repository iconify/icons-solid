import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk8gu0r-j.css';
import '../../css/u/udkitmi0k.css';
import '../../css/d/db1mamb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sk8gu0r-j"/><path class="udkitmi0k"/><path class="db1mamb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:swords-duotone"} {...others} />);
}

export default Component;
