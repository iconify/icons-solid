import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j1u22lbcq.css';
import '../../css/h/h94g55hic.css';
import '../../css/f/fxljtu09q.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j1u22lbcq wm-shadow"/><path class="h94g55hic wm-shadow"/><path class="fxljtu09q"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bluetooth-off"} {...others} />);
}

export default Component;
