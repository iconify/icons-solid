import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z9-ek8f5j.css';
import '../../css/g/g5ykuz3vl.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k z9-ek8f5j"/><path class="g5ykuz3vl wm-a"/><path class="og5669pjp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:case-lower"} {...others} />);
}

export default Component;
