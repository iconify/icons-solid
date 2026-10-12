import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iasuuhpco.css';
import '../../css/y/yr6qz5p1q.css';
import '../../css/g/gg656motp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iasuuhpco"/><path class="yr6qz5p1q"/><path class="gg656motp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:columns-3-cog-duotone"} {...others} />);
}

export default Component;
