import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx8x8lb8l.css';
import '../../css/l/lpw68kbqq.css';
import '../../css/z/z_drxgbee.css';
import '../../css/a/aydsxsbar.css';
import '../../css/s/sicbvj6le.css';
import '../../css/y/y1erj8xgd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx8x8lb8l"/><path class="lpw68kbqq"/><path class="z_drxgbee"/><path class="aydsxsbar"/><path class="sicbvj6le"/><path class="y1erj8xgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:romm-ps2"} {...others} />);
}

export default Component;
