import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peqinxlmq.css';
import '../../css/j/jkgutjb-o.css';
import '../../css/o/ouxjkjb6z.css';
import '../../css/b/bjgojdb4u.css';
import '../../css/i/i9sg04a7g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="peqinxlmq"/><path class="jkgutjb-o"/><path class="ouxjkjb6z"/><path class="bjgojdb4u"/><path class="i9sg04a7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:telegram"} {...others} />);
}

export default Component;
