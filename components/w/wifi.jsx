import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cihtvxb9i.css';
import '../../css/s/s7ocxccpe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="cihtvxb9i"/><path class="s7ocxccpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:wifi"} {...others} />);
}

export default Component;
