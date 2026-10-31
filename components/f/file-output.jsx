import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/la86h8b1w.css';
import '../../css/s/sd9l15b0w.css';
import '../../css/y/ycysw5bol.css';
import '../../css/r/r3xl7mgzd.css';
import '../../css/c/cjb5brbbe.css';
import '../../css/p/ppimmtnqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="la86h8b1w wm-shadow"/><path class="sd9l15b0w"/><path class="ycysw5bol"/><path class="r3xl7mgzd"/><path class="cjb5brbbe"/><path class="ppimmtnqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-output"} {...others} />);
}

export default Component;
