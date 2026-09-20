import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqjg6_uxs.css';
import '../../css/q/qdb6ctypl.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="pqjg6_uxs"/><path clip-rule="evenodd" class="qdb6ctypl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:trpc"} {...others} />);
}

export default Component;
