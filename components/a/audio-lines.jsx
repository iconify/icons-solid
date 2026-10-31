import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/y/ybp_pqrii.css';
import '../../css/r/r6wnw272x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k xye5qqb6j"/><path class="wm-a ybp_pqrii"/><path class="r6wnw272x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:audio-lines"} {...others} />);
}

export default Component;
