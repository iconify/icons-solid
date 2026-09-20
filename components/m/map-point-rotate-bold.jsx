import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b60eo5bxw.css';
import '../../css/i/i_hca-bhh.css';
import '../../css/f/fno7as3wa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b60eo5bxw"/><path class="i_hca-bhh"/><path clip-rule="evenodd" class="fno7as3wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-rotate-bold"} {...others} />);
}

export default Component;
