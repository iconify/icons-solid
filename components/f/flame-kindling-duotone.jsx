import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su4li0btr.css';
import '../../css/m/m8jq7qbyn.css';
import '../../css/s/s6-v_jbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="su4li0btr"/><path class="m8jq7qbyn"/><path class="s6-v_jbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flame-kindling-duotone"} {...others} />);
}

export default Component;
