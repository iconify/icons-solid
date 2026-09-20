import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bode0t1-k.css';
import '../../css/a/az5r9nb_t.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/xqp3lqbhw.css';
import '../../css/m/mewnltmzk.css';
import '../../css/s/si33jlbhj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bode0t1-k"/><path class="az5r9nb_t"/><g class="jn8qy4bru"><path class="xqp3lqbhw"/><path class="mewnltmzk"/><path class="si33jlbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mouse"} {...others} />);
}

export default Component;
