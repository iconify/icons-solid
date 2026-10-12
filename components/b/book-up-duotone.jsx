import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajwnpacwy.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/q/q-5_z1t3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajwnpacwy"/><path class="ssh18kvpm"/><path class="q-5_z1t3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-up-duotone"} {...others} />);
}

export default Component;
