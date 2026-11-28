import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah6i-7b1x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjyz-pbuf.css';
import '../../css/j/j1qxisssa.css';
import '../../css/j/jzv2cpbts.css';
import '../../css/v/ve59fqbly.css';
import '../../css/y/yto511bre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah6i-7b1x secondary"/><g class="dt0cm9dhy primary"><path class="mjyz-pbuf"/><path class="j1qxisssa"/><path class="jzv2cpbts"/><path class="ve59fqbly"/><path class="yto511bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hand-sparkles-duo"} {...others} />);
}

export default Component;
