import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vx462l46d.css';
import '../../css/h/hkedf4c7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vx462l46d"/><path class="hkedf4c7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:mountain"} {...others} />);
}

export default Component;
