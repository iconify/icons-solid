import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llp4lcc-o.css';
import '../../css/d/devx4xt0b.css';
import '../../css/f/fltfvbcam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="llp4lcc-o"/><path class="devx4xt0b"/><path class="fltfvbcam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:replay"} {...others} />);
}

export default Component;
