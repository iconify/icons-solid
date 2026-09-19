import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/to8xb4b0p.css';
import '../../css/d/d4-5slbjk.css';
import '../../css/d/dqc3hy9ek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="to8xb4b0p"/><path class="d4-5slbjk"/><path class="dqc3hy9ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:security-key-usb"} {...others} />);
}

export default Component;
