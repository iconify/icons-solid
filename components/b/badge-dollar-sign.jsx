import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bxt_esbha.css';
import '../../css/v/vq8_yck_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bxt_esbha"/><path class="vq8_yck_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:badge-dollar-sign"} {...others} />);
}

export default Component;
