import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cnp_8nbae.css';
import '../../css/h/h93505_yx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cnp_8nbae"/><path class="h93505_yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-car-seat"} {...others} />);
}

export default Component;
