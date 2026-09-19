import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/szr1vwbtd.css';
import '../../css/q/qq28i-bij.css';
import '../../css/d/d821ukbnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="szr1vwbtd"/><path class="qq28i-bij"/><path class="d821ukbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dollar"} {...others} />);
}

export default Component;
