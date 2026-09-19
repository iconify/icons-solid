import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/winuw9mpr.css';
import '../../css/y/y6acru97n.css';
import '../../css/s/sipithbeq.css';
import '../../css/o/oh2-fep-p.css';
import '../../css/y/yvlepzcrj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="winuw9mpr"/><path class="y6acru97n"/><path class="sipithbeq"/><path class="oh2-fep-p"/><path class="yvlepzcrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:stylua"} {...others} />);
}

export default Component;
