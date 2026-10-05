import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lg492db7d.css';
import '../../css/l/l42viqmux.css';
import '../../css/h/huw08fbqg.css';
import '../../css/s/s6ytvubnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="lg492db7d"/><path class="l42viqmux"/><path class="huw08fbqg"/><path class="s6ytvubnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:maximize"} {...others} />);
}

export default Component;
