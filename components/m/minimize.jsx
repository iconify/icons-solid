import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jps-8y66p.css';
import '../../css/u/uzyok4b_v.css';
import '../../css/v/v76nrbb3g.css';
import '../../css/l/lbgz0jbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jps-8y66p"/><path class="uzyok4b_v"/><path class="v76nrbb3g"/><path class="lbgz0jbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:minimize"} {...others} />);
}

export default Component;
