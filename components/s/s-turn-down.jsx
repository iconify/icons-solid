import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/weabemp1z.css';
import '../../css/i/ikqaqyboe.css';
import '../../css/h/hzwe0wbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="weabemp1z"/><path class="ikqaqyboe"/><path class="hzwe0wbyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:s-turn-down"} {...others} />);
}

export default Component;
