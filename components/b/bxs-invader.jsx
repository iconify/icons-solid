import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa-mfb10x.css';
import '../../css/d/d5ojkxbdk.css';
import '../../css/b/bot1wzbxy.css';
import '../../css/h/hj9jr80pc.css';
import '../../css/l/lknnxwbda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa-mfb10x"/><path class="d5ojkxbdk"/><path class="bot1wzbxy"/><path class="hj9jr80pc"/><path class="lknnxwbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-invader"} {...others} />);
}

export default Component;
