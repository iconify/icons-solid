import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct1vd06xk.css';
import '../../css/y/yxy1cmbif.css';
import '../../css/l/l-hwm6t3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ct1vd06xk"/><path class="yxy1cmbif"/><path class="l-hwm6t3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:certificate-duotone"} {...others} />);
}

export default Component;
