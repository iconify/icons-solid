import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bx5v3rb8j.css';
import '../../css/t/t3b4xobiz.css';
import '../../css/r/rp7hkwb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bx5v3rb8j wm-k"/><path class="t3b4xobiz wm-a"/><path class="rp7hkwb-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:stocking"} {...others} />);
}

export default Component;
