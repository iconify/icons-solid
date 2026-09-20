import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ib5-75bck.css';
import '../../css/n/n3zf9obkq.css';
import '../../css/a/ad2a0hb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ib5-75bck"/><path class="n3zf9obkq"/><path class="ad2a0hb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:toggle-on-duotone"} {...others} />);
}

export default Component;
