import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/w/wmqawrbxw.css';
import '../../css/c/c6fqf6bol.css';
import '../../css/j/j-10gwb6n.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path clip-rule="evenodd" class="wmqawrbxw"/><path clip-rule="evenodd" class="c6fqf6bol"/><path clip-rule="evenodd" class="j-10gwb6n"/><path class="p_03qcbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:eight-thirty"} {...others} />);
}

export default Component;
