import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sj5uzfbyn.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/i/ijzyzjblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sj5uzfbyn"/><path class="mqtixbwqo"/><path class="ijzyzjblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-freeze"} {...others} />);
}

export default Component;
