import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmo593b_l.css';
import '../../css/m/m58pdegcz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="nmo593b_l"/><path clip-rule="evenodd" class="m58pdegcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:currency-dollar"} {...others} />);
}

export default Component;
