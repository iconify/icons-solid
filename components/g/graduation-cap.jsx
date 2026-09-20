import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j46jcnrmf.css';
import '../../css/c/c7pribb8g.css';
import '../../css/f/f2kw73rvw.css';
import '../../css/r/rjv02g7wl.css';
import '../../css/f/fuqldcbte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j46jcnrmf"/><path class="c7pribb8g"/><path class="f2kw73rvw"/><path class="rjv02g7wl"/><path class="fuqldcbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graduation-cap"} {...others} />);
}

export default Component;
