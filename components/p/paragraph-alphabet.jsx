import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci_5ps2ie.css';
import '../../css/g/g1mezdb9o.css';
import '../../css/t/tvwrrkg1q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ci_5ps2ie"/><path class="g1mezdb9o"/><path class="tvwrrkg1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:paragraph-alphabet"} {...others} />);
}

export default Component;
