import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/avd3s1hni.css';
import '../../css/k/k1p42wb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="avd3s1hni"/><path class="k1p42wb5t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:at-sign"} {...others} />);
}

export default Component;
