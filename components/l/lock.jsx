import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/off5wgbrp.css';
import '../../css/u/ugx4tdyiz.css';
import '../../css/b/bc50g6bwm.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="off5wgbrp"/><rect class="ugx4tdyiz"/><path class="bc50g6bwm"/><path class="jcnvp7bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lock"} {...others} />);
}

export default Component;
