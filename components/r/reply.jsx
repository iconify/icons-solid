import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zxc-f1b_i.css';
import '../../css/e/easg2k8ph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="zxc-f1b_i"/><path class="easg2k8ph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:reply"} {...others} />);
}

export default Component;
