import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3fkajbsr.css';
import '../../css/u/uyw9-zbfi.css';
import '../../css/r/rktspef3f.css';
import '../../css/y/ys57o7bto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3fkajbsr"/><path class="uyw9-zbfi"/><rect class="rktspef3f"/><path class="ys57o7bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-docker"} {...others} />);
}

export default Component;
