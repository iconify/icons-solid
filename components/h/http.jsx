import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/r/rirt7bcol.css';
import '../../css/j/jdk23lb_l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="rirt7bcol"/><path class="jdk23lb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:http"} {...others} />);
}

export default Component;
