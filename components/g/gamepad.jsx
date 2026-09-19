import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vq0e2pbnv.css';
import '../../css/h/husey_bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vq0e2pbnv"/><path class="husey_bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:gamepad"} {...others} />);
}

export default Component;
