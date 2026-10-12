import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apuirddye.css';
import '../../css/t/tv7s8ebji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="apuirddye"/><path class="tv7s8ebji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:messages-circle-duotone"} {...others} />);
}

export default Component;
