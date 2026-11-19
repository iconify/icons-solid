import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k35_t20li.css';
import '../../css/l/lje_f2bjg.css';
import '../../css/h/hvqqtvb8h.css';
import '../../css/t/tvr9q5e1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k35_t20li"/><path class="lje_f2bjg"/><path class="hvqqtvb8h"/><path class="tvr9q5e1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:door-user"} {...others} />);
}

export default Component;
