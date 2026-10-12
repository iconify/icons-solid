import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evp8xsbel.css';
import '../../css/w/wu8w-7b0t.css';
import '../../css/l/lvwry-bxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="evp8xsbel"/><path class="wu8w-7b0t"/><path class="lvwry-bxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:box-duotone"} {...others} />);
}

export default Component;
