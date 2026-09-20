import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2m32f12q.css';
import '../../css/x/x-5wu40ay.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="m2m32f12q"/><path clip-rule="evenodd" class="x-5wu40ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:division"} {...others} />);
}

export default Component;
