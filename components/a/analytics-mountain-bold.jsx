import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgh54ebqi.css';
import '../../css/r/rr5deojra.css';
import '../../css/q/qpyx_5ble.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgh54ebqi"/><path class="rr5deojra"/><path class="qpyx_5ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-mountain-bold"} {...others} />);
}

export default Component;
