import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s45x-eokh.css';
import '../../css/t/t218te2ox.css';
import '../../css/z/zj1_u_b4s.css';
import '../../css/e/eduug97bk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s45x-eokh wm-deco"/><path class="t218te2ox wm-deco"/><path class="wm-k zj1_u_b4s"/><path class="eduug97bk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:strikethrough-blueprint"} {...others} />);
}

export default Component;
