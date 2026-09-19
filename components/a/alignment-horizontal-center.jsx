import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/t/tzalo3bkh.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/b/bcs037k4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="tzalo3bkh"/><path class="uk1hw4hsp"/><path class="bcs037k4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-horizontal-center"} {...others} />);
}

export default Component;
