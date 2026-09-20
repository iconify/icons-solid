import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oks3xobbp.css';
import '../../css/w/wsook6b4e.css';
import '../../css/a/ansc4kbhg.css';
import '../../css/w/wkq9lk8hk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oks3xobbp"/><path class="wsook6b4e"/><path class="ansc4kbhg"/><path class="wkq9lk8hk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-bold"} {...others} />);
}

export default Component;
