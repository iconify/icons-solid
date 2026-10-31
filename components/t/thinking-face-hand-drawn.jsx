import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/okkcvfczg.css';
import '../../css/v/vkzhnqh4b.css';
import '../../css/x/xoy-tccfh.css';
import '../../css/j/j7wt8tb9u.css';
import '../../css/a/az9hlm3tz.css';
import '../../css/z/zjgcl4onj.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="okkcvfczg"/><path class="vkzhnqh4b"/><path class="xoy-tccfh"/><path class="j7wt8tb9u"/><path class="az9hlm3tz"/><path class="zjgcl4onj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:thinking-face-hand-drawn"} {...others} />);
}

export default Component;
