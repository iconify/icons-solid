import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ujvxy2bgd.css';
import '../../css/o/olhyydx6s.css';
import '../../css/a/aijnr07in.css';
import '../../css/l/lk2armtbz.css';
import '../../css/y/yjt7y95ow.css';
import '../../css/z/z0hg1qmjf.css';
import '../../css/j/j5y3gb1ru.css';
import '../../css/p/pxu9f_b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ujvxy2bgd"/><path class="olhyydx6s"/><path class="aijnr07in wm-shine"/><path class="lk2armtbz wm-k"/><path class="wm-a yjt7y95ow"/><path class="z0hg1qmjf"/><path class="j5y3gb1ru"/><path class="pxu9f_b_q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:potted-plant"} {...others} />);
}

export default Component;
