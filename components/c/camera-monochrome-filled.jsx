import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmrc5cb8g.css';
import '../../css/o/oc2xyccjk.css';
import '../../css/v/vgo5klasq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmrc5cb8g"/><path class="oc2xyccjk"/><path class="vgo5klasq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-monochrome-filled"} {...others} />);
}

export default Component;
