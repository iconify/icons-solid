import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/d/diusqeb6m.css';
import '../../css/c/cc9zl-3qc.css';
import '../../css/r/rr5q5cczm.css';
import '../../css/x/x67u_0bjj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="efhtg0b9p"/><path class="diusqeb6m"/><path class="cc9zl-3qc"/><path class="rr5q5cczm"/><path class="x67u_0bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-remove"} {...others} />);
}

export default Component;
