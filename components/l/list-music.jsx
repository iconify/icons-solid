import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eucpwbb2d.css';
import '../../css/w/w93ektbcb.css';
import '../../css/y/ygxy35b2s.css';
import '../../css/w/wjf3mzdsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eucpwbb2d"/><path class="w93ektbcb"/><path class="ygxy35b2s"/><path class="wjf3mzdsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-music"} {...others} />);
}

export default Component;
