import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a409i6bsu.css';
import '../../css/n/naljg539h.css';
import '../../css/j/jytd4wl2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a409i6bsu"/><path class="naljg539h"/><path class="jytd4wl2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ladle-bold"} {...others} />);
}

export default Component;
