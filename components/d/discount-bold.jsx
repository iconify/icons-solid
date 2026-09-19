import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/no83u0bsh.css';
import '../../css/w/w7m9x29_w.css';
import '../../css/k/k19608e-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="no83u0bsh"/><path class="w7m9x29_w"/><path class="k19608e-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discount-bold"} {...others} />);
}

export default Component;
