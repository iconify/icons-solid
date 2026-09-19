import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/j/juvqsgjpc.css';
import '../../css/b/b0tdiib4n.css';
import '../../css/j/jxqi2jbpi.css';
import '../../css/e/eb4sp6b5h.css';
import '../../css/o/o4b-v892s.css';
import '../../css/v/vyhqdjbuw.css';
import '../../css/o/on4koibxk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="juvqsgjpc"/><line x1="23" x2="23" y1="32" y2="42" class="b0tdiib4n"/><line x1="17" x2="29" y1="44" y2="44" class="jxqi2jbpi"/><line x1="16" x2="30" y1="23" y2="23" class="eb4sp6b5h"/><path class="o4b-v892s"/><path class="vyhqdjbuw"/><path class="on4koibxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:liqueur"} {...others} />);
}

export default Component;
