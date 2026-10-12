import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t38uxporw.css';
import '../../css/u/u604h754p.css';
import '../../css/b/bk7b1pwqb.css';
import '../../css/f/fov9xb5xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t38uxporw"/><path class="u604h754p"/><path class="bk7b1pwqb"/><path class="fov9xb5xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:beef-duotone"} {...others} />);
}

export default Component;
