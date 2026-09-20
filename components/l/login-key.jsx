import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqmz7ibzg.css';
import '../../css/p/pq1qj02kb.css';
import '../../css/p/pj_stctjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rqmz7ibzg"/><path class="pq1qj02kb"/><path class="pj_stctjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:login-key"} {...others} />);
}

export default Component;
