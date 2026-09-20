import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/e45481izn.css';
import '../../css/h/h8gxm4bya.css';
import '../../css/z/zhz3nyihr.css';
import '../../css/y/y1887qbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="e45481izn"/><path clip-rule="evenodd" class="h8gxm4bya"/><path class="zhz3nyihr"/><path class="y1887qbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:summit"} {...others} />);
}

export default Component;
