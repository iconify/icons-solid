import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx9cd6bvj.css';
import '../../css/e/e7e4msb7l.css';
import '../../css/v/vw068acij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lx9cd6bvj"/><path class="e7e4msb7l"/><path class="vw068acij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-metal-duotone"} {...others} />);
}

export default Component;
