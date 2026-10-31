import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fw2e8dbwq.css';
import '../../css/f/frl2yvq9a.css';
import '../../css/p/p-_ya_nyl.css';
import '../../css/f/fto-wrbxv.css';
import '../../css/i/i1t_sgbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fw2e8dbwq wm-shadow"/><path class="frl2yvq9a"/><path class="p-_ya_nyl"/><path class="fto-wrbxv"/><path class="i1t_sgbih wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:satellite-dish"} {...others} />);
}

export default Component;
