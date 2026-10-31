import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2zfv2bxk.css';
import '../../css/o/o9v6_hbxs.css';
import '../../css/y/y8p_yxbzv.css';
import '../../css/a/aadms3bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k2zfv2bxk wm-shadow"/><path class="o9v6_hbxs"/><path class="y8p_yxbzv"/><path class="aadms3bvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sun"} {...others} />);
}

export default Component;
