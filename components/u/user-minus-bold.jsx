import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5bbu8buq.css';
import '../../css/t/tv6p83bhq.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s5bbu8buq"/><path clip-rule="evenodd" class="tv6p83bhq"/><path class="c_zdt_bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-minus-bold"} {...others} />);
}

export default Component;
