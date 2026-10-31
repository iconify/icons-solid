import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kecbpiilb.css';
import '../../css/t/t20iil5tj.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/n/nl0gnobci.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kecbpiilb"/><path class="t20iil5tj wm-shine"/><path class="v2ukonb-w wm-k"/><path class="nl0gnobci wm-s"/><path class="j3xl1tijc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:map-pin-plus"} {...others} />);
}

export default Component;
