import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lan-8fk_e.css';
import '../../css/b/bnf8j9biy.css';
import '../../css/y/y15m6qfes.css';
import '../../css/j/jto9u1guw.css';
import '../../css/f/f-0nn-xyq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lan-8fk_e"/><path class="bnf8j9biy"/><rect class="y15m6qfes"/><rect class="jto9u1guw"/><rect class="f-0nn-xyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-histogram-two"} {...others} />);
}

export default Component;
