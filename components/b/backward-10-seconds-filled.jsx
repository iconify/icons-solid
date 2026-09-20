import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijrvscckg.css';
import '../../css/f/fy--vuoiq.css';
import '../../css/u/ucfjmihqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ijrvscckg"/><path class="fy--vuoiq"/><path class="ucfjmihqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:backward-10-seconds-filled"} {...others} />);
}

export default Component;
