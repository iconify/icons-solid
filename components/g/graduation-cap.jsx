import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ttlc-na8v.css';
import '../../css/p/po6tsm3ou.css';
import '../../css/l/l2miw0nqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ttlc-na8v"/><path class="po6tsm3ou"/><path class="l2miw0nqo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:graduation-cap"} {...others} />);
}

export default Component;
