import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj9xhdc4k.css';
import '../../css/n/n_9w97sji.css';
import '../../css/b/bjum2bbcp.css';
import '../../css/s/s9txiubvk.css';
import '../../css/g/g78lxacsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lj9xhdc4k"/><path class="n_9w97sji"/><path class="bjum2bbcp"/><path class="s9txiubvk"/><path class="g78lxacsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:doctor"} {...others} />);
}

export default Component;
