import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rwlkj_bky.css';
import '../../css/e/evex28bfe.css';
import '../../css/d/dpr05y1rb.css';
import '../../css/p/pb0ihgble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rwlkj_bky"/><path class="evex28bfe"/><path class="dpr05y1rb"/><path class="pb0ihgble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:quote"} {...others} />);
}

export default Component;
