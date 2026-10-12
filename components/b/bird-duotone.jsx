import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh27c8byi.css';
import '../../css/a/agaaot7xz.css';
import '../../css/p/p2etqnb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uh27c8byi"/><path class="agaaot7xz"/><path class="p2etqnb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bird-duotone"} {...others} />);
}

export default Component;
