import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo0ulr8we.css';
import '../../css/f/f545x0rdr.css';
import '../../css/r/ruzuxjgff.css';
import '../../css/e/epc4scphz.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/g/gm1yvzrmo.css';
import '../../css/m/mrxt1pbyq.css';
import '../../css/l/lfow6pbck.css';
import '../../css/g/g0cq5hb0u.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="xo0ulr8we"/><rect class="f545x0rdr"/><path class="ruzuxjgff"/><rect class="epc4scphz"/><g class="brzn_0bpr"><path class="gm1yvzrmo"/><rect class="mrxt1pbyq"/><path class="lfow6pbck"/><rect class="g0cq5hb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:european-name-badge"} {...others} />);
}

export default Component;
