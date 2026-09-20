import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9powx-_c.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/w/wzf4edn2z.css';
import '../../css/v/v-y-uhhip.css';
import '../../css/z/z3_onkb4z.css';
import '../../css/s/s216q6btk.css';
import '../../css/p/pyu4qpbsy.css';

const viewBox = {"width":225,"height":225};
const content = `<rect class="x9powx-_c"/><g class="n1mjunbsu"><path class="wzf4edn2z"/><path class="v-y-uhhip"/><path class="z3_onkb4z"/><path class="s216q6btk"/><circle class="pyu4qpbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:timesheet"} {...others} />);
}

export default Component;
