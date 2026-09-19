import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o8s13id_g.css';
import '../../css/e/erywxf8wz.css';
import '../../css/u/ub5j2f5wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o8s13id_g"/><path class="erywxf8wz"/><path class="ub5j2f5wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-done-01"} {...others} />);
}

export default Component;
