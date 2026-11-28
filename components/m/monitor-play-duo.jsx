import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prbjzkbzo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/x/xij9k1b5m.css';
import '../../css/c/ck0u8-bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prbjzkbzo secondary"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="xij9k1b5m"/><path class="ck0u8-bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-play-duo"} {...others} />);
}

export default Component;
