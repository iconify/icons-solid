import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8-rrpbya.css';
import '../../css/z/z7_tv0bli.css';
import '../../css/j/ja3silbpz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c8-rrpbya"/><path class="z7_tv0bli"/><path class="ja3silbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nailpolish"} {...others} />);
}

export default Component;
