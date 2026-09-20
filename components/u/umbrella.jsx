import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6p4k08td.css';
import '../../css/g/gp-9ncbea.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="v6p4k08td"/><path clip-rule="evenodd" class="gp-9ncbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:umbrella"} {...others} />);
}

export default Component;
