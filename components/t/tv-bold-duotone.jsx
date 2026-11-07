import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_w6sbs0y.css';
import '../../css/v/vlxmvvgzk.css';
import '../../css/c/cf6plbcpm.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/p343m9bwv.css';
import '../../css/g/g9yhdubnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_w6sbs0y"/><path class="vlxmvvgzk"/><path class="cf6plbcpm"/><g class="xtpeb-edw"><path class="p343m9bwv"/><path class="g9yhdubnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-bold-duotone"} {...others} />);
}

export default Component;
