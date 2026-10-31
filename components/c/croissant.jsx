import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/m/m_tvp9bie.css';
import '../../css/p/pp8vddcog.css';
import '../../css/c/c-vv9ibto.css';
import '../../css/j/jp39-sbfr.css';
import '../../css/v/vq9y-6bng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="m_tvp9bie wm-shadow"/><path class="pp8vddcog wm-shadow"/><path class="c-vv9ibto wm-shadow"/><path class="jp39-sbfr wm-k"/><path class="vq9y-6bng wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:croissant"} {...others} />);
}

export default Component;
