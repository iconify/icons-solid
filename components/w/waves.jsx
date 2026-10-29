import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gwq6sk28r.css';
import '../../css/k/kgbn2cc9v.css';
import '../../css/h/h9urc9bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gwq6sk28r wm-a"/><path class="kgbn2cc9v"/><path class="h9urc9bth wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:waves"} {...others} />);
}

export default Component;
