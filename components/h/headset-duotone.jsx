import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-49kub1n.css';
import '../../css/l/l3ti7bc2l.css';
import '../../css/z/z-7f7hehn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-49kub1n"/><path class="l3ti7bc2l"/><path class="z-7f7hehn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:headset-duotone"} {...others} />);
}

export default Component;
