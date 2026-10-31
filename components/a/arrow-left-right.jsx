import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qqsdrzrgh.css';
import '../../css/h/hz6w9qbdw.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qqsdrzrgh wm-k"/><path class="hz6w9qbdw wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:arrow-left-right"} {...others} />);
}

export default Component;
