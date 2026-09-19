import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hav_9b5ms.css';
import '../../css/j/jmluh1b1c.css';
import '../../css/l/ltnpeeb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hav_9b5ms"/><path class="jmluh1b1c"/><path class="ltnpeeb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setting-done-01"} {...others} />);
}

export default Component;
