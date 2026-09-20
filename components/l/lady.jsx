import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q74bedcuw.css';
import '../../css/r/r7tnuz0-t.css';
import '../../css/p/p5tlt55wn.css';
import '../../css/l/lqxi5835c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q74bedcuw"/><path class="r7tnuz0-t"/><path class="p5tlt55wn"/><path class="lqxi5835c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:lady"} {...others} />);
}

export default Component;
