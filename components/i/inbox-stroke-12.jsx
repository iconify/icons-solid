import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y7ari8bbq.css';
import '../../css/e/esmfmnw_q.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="y7ari8bbq"/><path class="esmfmnw_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:inbox-stroke-12"} {...others} />);
}

export default Component;
