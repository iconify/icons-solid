import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7yxhnbbp.css';
import '../../css/y/yn96a3qrz.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGpbj7dbCJ)" class="m7yxhnbbp"/><defs><linearGradient id="SVGpbj7dbCJ" x1="8.5" x2="11.356" y1="3" y2="18.576" gradientUnits="userSpaceOnUse"><stop class="yn96a3qrz"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:wrench-20"} {...others} />);
}

export default Component;
