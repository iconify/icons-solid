import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxonbs3hx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r9gp6qf-j.css';
import '../../css/s/suapyh5qh.css';
import '../../css/a/acylhpecb.css';
import '../../css/a/akzg8c5xz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxonbs3hx secondary"/><g class="dt0cm9dhy primary"><path class="r9gp6qf-j"/><path class="suapyh5qh"/><path class="acylhpecb"/><path class="akzg8c5xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rabbit-duo"} {...others} />);
}

export default Component;
