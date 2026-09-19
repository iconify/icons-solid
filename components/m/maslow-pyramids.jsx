import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/peboz8bop.css';
import '../../css/g/g0t_6qahn.css';
import '../../css/f/frmm1dwzb.css';
import '../../css/i/ismxphoxz.css';
import '../../css/g/g5rj52b6j.css';
import '../../css/o/op7tkue1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="peboz8bop"/><path class="g0t_6qahn"/><path class="frmm1dwzb"/><path class="ismxphoxz"/><path class="g5rj52b6j"/><path class="op7tkue1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:maslow-pyramids"} {...others} />);
}

export default Component;
