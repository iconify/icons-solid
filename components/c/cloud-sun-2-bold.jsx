import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jadh4hbzm.css';
import '../../css/y/y6qmidbva.css';
import '../../css/h/hsm64gbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jadh4hbzm"/><path class="y6qmidbva"/><path class="hsm64gbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-2-bold"} {...others} />);
}

export default Component;
