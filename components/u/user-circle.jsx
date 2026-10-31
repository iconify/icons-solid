import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p757kirnj.css';
import '../../css/z/zgy9megfu.css';
import '../../css/j/jw_09acez.css';
import '../../css/m/mmhxcqcoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="p757kirnj wm-shadow"/><path class="wm-k zgy9megfu"/><path class="jw_09acez wm-a"/><path class="mmhxcqcoa wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user-circle"} {...others} />);
}

export default Component;
