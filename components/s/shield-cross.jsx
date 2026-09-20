import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-mbrfowr.css';
import '../../css/q/q7bv4qk2t.css';
import '../../css/r/r-gymtb3u.css';
import '../../css/n/nr8tqssss.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a-mbrfowr"/><path class="q7bv4qk2t"/><path class="r-gymtb3u"/><path class="nr8tqssss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shield-cross"} {...others} />);
}

export default Component;
