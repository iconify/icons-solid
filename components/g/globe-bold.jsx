import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgmemqb3w.css';
import '../../css/f/fcfj16wrs.css';
import '../../css/t/tlmpzabnd.css';
import '../../css/m/mh5961bcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sgmemqb3w"/><path class="fcfj16wrs"/><path class="tlmpzabnd"/><path class="mh5961bcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globe-bold"} {...others} />);
}

export default Component;
