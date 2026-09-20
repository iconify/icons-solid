import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd8x8dh_y.css';
import '../../css/t/t6iv8tbiq.css';
import '../../css/x/xyg_zebck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd8x8dh_y"/><path class="t6iv8tbiq"/><path class="xyg_zebck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hotspot-wave-filled"} {...others} />);
}

export default Component;
