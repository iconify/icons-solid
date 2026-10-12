import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh4_-wb-l.css';
import '../../css/b/bussztgsc.css';
import '../../css/i/ivyiakb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lh4_-wb-l"/><path class="bussztgsc"/><path class="ivyiakb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-horizontal-distribute-start-duotone"} {...others} />);
}

export default Component;
