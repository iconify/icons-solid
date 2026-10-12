import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx2zb2box.css';
import '../../css/o/ow3pahb4h.css';
import '../../css/g/g5_1lqbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jx2zb2box"/><path class="ow3pahb4h"/><path class="g5_1lqbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:germ-duotone"} {...others} />);
}

export default Component;
