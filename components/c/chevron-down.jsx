import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x1q05vbhs.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x1q05vbhs"/><path class="wcaq-jbkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chevron-down"} {...others} />);
}

export default Component;
