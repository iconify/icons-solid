import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7mjf3bln.css';
import '../../css/s/sygtnjbkj.css';
import '../../css/z/z_1ytwpzb.css';
import '../../css/d/dzqtsubpx.css';
import '../../css/i/in4l2ib4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n7mjf3bln"/><circle class="sygtnjbkj"/><circle class="z_1ytwpzb"/><circle class="dzqtsubpx"/><circle class="in4l2ib4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cookies"} {...others} />);
}

export default Component;
