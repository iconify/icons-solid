import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn6572ben.css';
import '../../css/o/ooqed9bmq.css';
import '../../css/m/mdlfzfvqf.css';
import '../../css/v/vrwg7cc1q.css';
import '../../css/l/l_hkwiw8o.css';
import '../../css/g/gv69wtove.css';
import '../../css/h/h04quwjxl.css';
import '../../css/n/nbvb4rbjl.css';
import '../../css/b/bm17p3b7o.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="xn6572ben"/><circle class="ooqed9bmq"/><path class="mdlfzfvqf"/><g class="vrwg7cc1q"><path class="l_hkwiw8o"/><path class="gv69wtove"/><path class="h04quwjxl"/><circle class="nbvb4rbjl"/><path class="bm17p3b7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stethoscope"} {...others} />);
}

export default Component;
