import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k65hrfbvx.css';
import '../../css/e/e7esfuz-f.css';
import '../../css/w/wrvua4-5z.css';
import '../../css/x/xis2dw_-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k65hrfbvx wm-k"/><path class="e7esfuz-f wm-a"/><path class="wrvua4-5z"/><path class="xis2dw_-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pandal"} {...others} />);
}

export default Component;
