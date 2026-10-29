import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pu-d0tb1r.css';
import '../../css/z/zdwtwyb7k.css';
import '../../css/x/x80r5fgtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pu-d0tb1r"/><path class="wm-a zdwtwyb7k"/><path class="wm-s x80r5fgtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-candle-solid"} {...others} />);
}

export default Component;
