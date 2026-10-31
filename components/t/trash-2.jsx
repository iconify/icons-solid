import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a-ap2ibub.css';
import '../../css/k/k63e-ip9x.css';
import '../../css/a/araeuyb9p.css';
import '../../css/w/wuxib33uk.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a-ap2ibub"/><path class="k63e-ip9x wm-shine"/><path class="araeuyb9p wm-k"/><path class="wm-a wuxib33uk"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:trash-2"} {...others} />);
}

export default Component;
