import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5efxubfu.css';
import '../../css/e/e474ru3-c.css';
import '../../css/l/l8enjrbgu.css';
import '../../css/j/j9b3--big.css';
import '../../css/l/lyzghxbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c5efxubfu"/><path class="e474ru3-c"/><path class="l8enjrbgu"/><path class="j9b3--big"/><path class="lyzghxbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laptop-user"} {...others} />);
}

export default Component;
