import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/y/yeq9_s_cg.css';
import '../../css/c/c1y_6pbkx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="yeq9_s_cg"/><path class="c1y_6pbkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:reason"} {...others} />);
}

export default Component;
