import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgtv46dtz.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/u/ul6zk388y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pgtv46dtz"/><path class="ssh18kvpm"/><path class="ul6zk388y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-plus-duotone"} {...others} />);
}

export default Component;
