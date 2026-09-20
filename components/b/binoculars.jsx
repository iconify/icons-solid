import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b_wzqfbrp.css';
import '../../css/j/j4nn4wr6j.css';
import '../../css/e/eu8lclbeo.css';
import '../../css/n/n03q20b2k.css';
import '../../css/b/b-r8x3b_i.css';
import '../../css/e/eqtv4boar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b_wzqfbrp"/><path class="j4nn4wr6j"/><path class="eu8lclbeo"/><path class="n03q20b2k"/><path class="b-r8x3b_i"/><path class="eqtv4boar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:binoculars"} {...others} />);
}

export default Component;
