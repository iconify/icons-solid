import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/s/ss6--sbpb.css';
import '../../css/d/d_hbrvb-g.css';
import '../../css/f/fazon-bzg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="s53vmbcgz"><path class="ss6--sbpb"/><path class="d_hbrvb-g"/><path class="fazon-bzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:luau-check"} {...others} />);
}

export default Component;
