import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/datywxy9g.css';
import '../../css/w/w9w52560n.css';
import '../../css/b/b0igw0mrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="datywxy9g"/><path class="w9w52560n"/><path class="b0igw0mrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:projector-duotone"} {...others} />);
}

export default Component;
