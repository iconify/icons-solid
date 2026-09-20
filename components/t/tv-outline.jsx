import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8kjugm3b.css';
import '../../css/l/la2f6ep6a.css';
import '../../css/n/njkn9wwty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o8kjugm3b"/><path class="la2f6ep6a"/><path class="njkn9wwty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-outline"} {...others} />);
}

export default Component;
