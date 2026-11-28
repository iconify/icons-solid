import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzzz-ybzz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nyuapd1pn.css';
import '../../css/s/sc6p5_b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzzz-ybzz secondary"/><g class="dt0cm9dhy primary"><path class="nyuapd1pn"/><path class="sc6p5_b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:kettlebell-duo"} {...others} />);
}

export default Component;
