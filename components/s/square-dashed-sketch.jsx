import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tr4dphbyd.css';
import '../../css/r/rdd1_t1yo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tr4dphbyd"/><path class="rdd1_t1yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-dashed-sketch"} {...others} />);
}

export default Component;
