import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tef1dsoih.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tef1dsoih"/><path class="wcaq-jbkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:infinity"} {...others} />);
}

export default Component;
