import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivvs3abem.css';
import '../../css/r/rwz1msbvv.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGjZsZrbsg)" class="ivvs3abem"/><path fill="url(#SVGWHu4Ndaz)" class="rwz1msbvv"/><defs><linearGradient id="SVGjZsZrbsg" x1="8.154" x2="21.198" y1="1.875" y2="6.749" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGWHu4Ndaz" x1=".577" x2="14.483" y1="1.875" y2="7.543" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:food-16"} {...others} />);
}

export default Component;
