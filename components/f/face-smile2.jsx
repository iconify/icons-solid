import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3ondoz6y.css';
import '../../css/z/zigw2kbcr.css';
import '../../css/v/vn3oyvbre.css';
import '../../css/o/o_0di8bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="o3ondoz6y"/><path class="zigw2kbcr"/><circle class="vn3oyvbre"/><circle class="o_0di8bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:face-smile2"} {...others} />);
}

export default Component;
