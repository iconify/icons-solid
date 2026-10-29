import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bimk_9o9d.css';
import '../../css/x/x3jpfybpn.css';
import '../../css/y/y67z03bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bimk_9o9d wm-k"/><path class="wm-k x3jpfybpn"/><path class="wm-k y67z03bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:square-dashed"} {...others} />);
}

export default Component;
