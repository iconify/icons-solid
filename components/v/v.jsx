import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/t/t_lvzblrs.css';
import '../../css/v/viyqlk6iu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="t_lvzblrs"/><path class="viyqlk6iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:v"} {...others} />);
}

export default Component;
