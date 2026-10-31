import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p96048g-o.css';
import '../../css/m/mqdh37b6l.css';
import '../../css/e/en-orubxp.css';
import '../../css/x/xu73cdcji.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p96048g-o"/><path class="mqdh37b6l wm-shine"/><path class="en-orubxp wm-k"/><path class="wm-a xu73cdcji"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:santa-hat"} {...others} />);
}

export default Component;
