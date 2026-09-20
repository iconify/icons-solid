import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vti7h_4la.css';
import '../../css/z/znvm40bms.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-7};
const content = `<g class="cuyn6tgcc"><circle class="vti7h_4la"/><circle class="znvm40bms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flickr"} {...others} />);
}

export default Component;
