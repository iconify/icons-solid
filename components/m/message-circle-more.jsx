import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k96-hormc.css';
import '../../css/y/yg6srfb8r.css';
import '../../css/z/z6s-x5nyb.css';
import '../../css/h/h0_d3oolp.css';
import '../../css/i/ibxfsfege.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k96-hormc"/><path class="wm-shine yg6srfb8r"/><path class="wm-k z6s-x5nyb"/><path class="h0_d3oolp wm-a"/><path class="ibxfsfege wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:message-circle-more"} {...others} />);
}

export default Component;
