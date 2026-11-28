import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp43jgblw.css';
import '../../css/x/x_2l1bbaq.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="wp43jgblw"/><path class="x_2l1bbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sidebar-simple-right-duotone"} {...others} />);
}

export default Component;
