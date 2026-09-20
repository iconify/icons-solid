import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ykesj6ubi.css';
import '../../css/v/v421rfj_n.css';
import '../../css/i/iye25pbua.css';
import '../../css/r/rd04jr-sc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ykesj6ubi"/><path class="v421rfj_n"/><path class="iye25pbua"/><path class="rd04jr-sc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-man-vintage-tv"} {...others} />);
}

export default Component;
