import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amk230bfn.css';
import '../../css/f/fyq8p0too.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="amk230bfn"/><path class="fyq8p0too"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:archive-duotone-round"} {...others} />);
}

export default Component;
