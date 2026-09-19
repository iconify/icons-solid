import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmpm6kbfe.css';
import '../../css/y/y8fztob6t.css';
import '../../css/k/kuz_tibiz.css';
import '../../css/l/lqysr5b7l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jmpm6kbfe"/><path class="y8fztob6t"/><path class="kuz_tibiz"/><path class="lqysr5b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:fire-smoke-duo"} {...others} />);
}

export default Component;
