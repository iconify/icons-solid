import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o20t1r6ee.css';
import '../../css/o/o121o_9mq.css';
import '../../css/b/bghfy0b3k.css';
import '../../css/c/c3siailnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o20t1r6ee"/><path class="o121o_9mq"/><path class="bghfy0b3k"/><path class="c3siailnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-filter-x-duo"} {...others} />);
}

export default Component;
