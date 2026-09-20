import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_rw3tb2y.css';
import '../../css/f/f5mcp3p6l.css';
import '../../css/m/myds06t7f.css';
import '../../css/k/kqbg0g8jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e_rw3tb2y"/><path class="f5mcp3p6l"/><path class="myds06t7f"/><path class="kqbg0g8jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:basketball-linear"} {...others} />);
}

export default Component;
