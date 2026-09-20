import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm0g4b99a.css';
import '../../css/e/e12r68bme.css';
import '../../css/z/zhmxno9se.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hm0g4b99a"/><path class="e12r68bme"/><path class="zhmxno9se"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-2-bold"} {...others} />);
}

export default Component;
