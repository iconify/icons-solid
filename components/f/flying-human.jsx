import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h1m10_v9q.css';
import '../../css/h/hl3-0tb6x.css';
import '../../css/j/j55g2km1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h1m10_v9q"/><path class="hl3-0tb6x"/><path class="j55g2km1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flying-human"} {...others} />);
}

export default Component;
