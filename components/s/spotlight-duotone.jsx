import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4xm99bgk.css';
import '../../css/x/xz0npwbkb.css';
import '../../css/q/q_atanv8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4xm99bgk"/><path class="xz0npwbkb"/><path class="q_atanv8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:spotlight-duotone"} {...others} />);
}

export default Component;
