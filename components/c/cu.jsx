import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qucckv81f.css';
import '../../css/t/t24nc4fyz.css';
import '../../css/t/t_n49dv1k.css';
import '../../css/m/m8w15ub4u.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qucckv81f"/><path class="t24nc4fyz"/><path class="t_n49dv1k"/><path class="m8w15ub4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cu"} {...others} />);
}

export default Component;
