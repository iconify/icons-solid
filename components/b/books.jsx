import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqu_jfbbd.css';
import '../../css/o/o7de6qb5z.css';
import '../../css/a/amw_2hi9g.css';
import '../../css/m/mvopcsl9d.css';
import '../../css/t/tooygpbbq.css';
import '../../css/u/u_05zn1aj.css';
import '../../css/k/ktoy9sb9q.css';
import '../../css/i/it8kxyqll.css';
import '../../css/p/pm4_5mzwa.css';
import '../../css/y/yj0ug3ixf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mqu_jfbbd"/><path class="o7de6qb5z"/><path class="amw_2hi9g"/><path class="mvopcsl9d"/><path class="tooygpbbq"/><path class="u_05zn1aj"/><path class="ktoy9sb9q"/><path class="it8kxyqll"/><path class="pm4_5mzwa"/><path class="yj0ug3ixf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:books"} {...others} />);
}

export default Component;
