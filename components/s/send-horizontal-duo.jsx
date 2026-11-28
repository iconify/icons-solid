import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v47ok504d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g5fxtgbyo.css';
import '../../css/v/vlzq7tbuf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v47ok504d"/><g class="dt0cm9dhy primary"><path class="g5fxtgbyo"/><path class="vlzq7tbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:send-horizontal-duo"} {...others} />);
}

export default Component;
