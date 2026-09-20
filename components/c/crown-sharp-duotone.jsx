import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syvg0141h.css';
import '../../css/i/i_gwh6b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="syvg0141h"/><path class="i_gwh6b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:crown-sharp-duotone"} {...others} />);
}

export default Component;
