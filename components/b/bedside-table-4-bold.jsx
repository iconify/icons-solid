import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlojlsblx.css';
import '../../css/n/nu4o-acnp.css';
import '../../css/w/wxzn3vsps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xlojlsblx"/><path class="nu4o-acnp"/><path clip-rule="evenodd" class="wxzn3vsps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-4-bold"} {...others} />);
}

export default Component;
