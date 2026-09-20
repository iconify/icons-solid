import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8fy4xbdj.css';
import '../../css/s/s1jeu0_ym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f8fy4xbdj"/><path class="s1jeu0_ym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-hand"} {...others} />);
}

export default Component;
