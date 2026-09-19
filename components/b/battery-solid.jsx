import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-0p5ujpe.css';
import '../../css/r/rkkbv5byy.css';
import '../../css/c/cylt8jbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y-0p5ujpe"/><path clip-rule="evenodd" class="rkkbv5byy"/><path class="cylt8jbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:battery-solid"} {...others} />);
}

export default Component;
