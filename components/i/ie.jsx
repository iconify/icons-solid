import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg3psup2u.css';
import '../../css/h/h6qog1b5o.css';
import '../../css/a/a-o3b9bhy.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="dg3psup2u"/><path class="h6qog1b5o"/><path class="a-o3b9bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ie"} {...others} />);
}

export default Component;
