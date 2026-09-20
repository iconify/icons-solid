import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbit8ibsb.css';
import '../../css/x/xy3f92aca.css';
import '../../css/s/sudowun8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kbit8ibsb"/><path class="xy3f92aca"/><path class="sudowun8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-bold-duotone"} {...others} />);
}

export default Component;
