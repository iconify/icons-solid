import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-gm7ibvs.css';
import '../../css/m/mzy1pxb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-gm7ibvs"/><path class="mzy1pxb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-bitcoin"} {...others} />);
}

export default Component;
