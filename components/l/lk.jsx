import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obzzdc8xv.css';
import '../../css/c/ci9c0bbqn.css';
import '../../css/s/stlxiq1mc.css';
import '../../css/x/xnz77bczq.css';
import '../../css/j/jypze3b0o.css';
import '../../css/z/zg3ndtsqd.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="obzzdc8xv"/><path class="ci9c0bbqn"/><path class="stlxiq1mc"/><path class="xnz77bczq"/><path class="jypze3b0o"/><path clip-rule="evenodd" class="zg3ndtsqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:lk"} {...others} />);
}

export default Component;
