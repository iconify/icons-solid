import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9hzd3eul.css';
import '../../css/h/hr0kstbnd.css';
import '../../css/k/kpikqbbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s9hzd3eul"/><path class="hr0kstbnd"/><path clip-rule="evenodd" class="kpikqbbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-outline"} {...others} />);
}

export default Component;
