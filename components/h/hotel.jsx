import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4v244bdo.css';
import '../../css/f/fxqd4zbiz.css';
import '../../css/y/yysj_8r7g.css';
import '../../css/c/co9nh8ais.css';
import '../../css/n/npvlzob8k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q4v244bdo"/><path class="fxqd4zbiz"/><path class="yysj_8r7g"/><path class="co9nh8ais"/><path class="npvlzob8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hotel"} {...others} />);
}

export default Component;
