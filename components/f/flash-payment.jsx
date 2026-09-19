import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/q/qe6ha-ylc.css';
import '../../css/c/czf_y_qzk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="qe6ha-ylc"/><path class="czf_y_qzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flash-payment"} {...others} />);
}

export default Component;
