import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u51_pobvc.css';
import '../../css/z/zg15yprkt.css';
import '../../css/m/mo69_0lat.css';
import '../../css/l/lmh6p_b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u51_pobvc wm-shadow"/><path class="wm-shadow zg15yprkt"/><path class="mo69_0lat"/><path class="lmh6p_b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:power"} {...others} />);
}

export default Component;
