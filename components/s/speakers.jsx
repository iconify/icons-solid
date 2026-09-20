import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gv7hrvi9x.css';
import '../../css/p/p5t2he_5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gv7hrvi9x"/><path class="p5t2he_5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:speakers"} {...others} />);
}

export default Component;
