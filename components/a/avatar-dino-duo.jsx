import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awsnl_b8i.css';
import '../../css/s/sd-hmubzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="awsnl_b8i"/><path class="sd-hmubzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dino-duo"} {...others} />);
}

export default Component;
