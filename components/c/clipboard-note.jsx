import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5oqxccsk.css';
import '../../css/n/n_g0fjydz.css';
import '../../css/f/f9d6qcb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b5oqxccsk"/><path class="n_g0fjydz"/><path class="f9d6qcb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:clipboard-note"} {...others} />);
}

export default Component;
