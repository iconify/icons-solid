import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hmvm9k37z.css';
import '../../css/h/h9tngubga.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d_5l10bed.css';
import '../../css/n/n4ivllbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hmvm9k37z"/><path class="h9tngubga"/><g class="mc2zb0bvp"><path class="d_5l10bed"/><path class="n4ivllbah"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightning-bold-duotone"} {...others} />);
}

export default Component;
