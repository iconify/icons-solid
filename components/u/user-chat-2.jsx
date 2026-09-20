import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eu9snjofn.css';
import '../../css/z/zrl5lxbeg.css';
import '../../css/w/w36hifbox.css';
import '../../css/l/l3t5e7bsq.css';
import '../../css/j/jje2z_1nx.css';
import '../../css/e/elpi32-7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eu9snjofn"/><path class="zrl5lxbeg"/><path class="w36hifbox"/><path class="l3t5e7bsq"/><path class="jje2z_1nx"/><path class="elpi32-7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:user-chat-2"} {...others} />);
}

export default Component;
