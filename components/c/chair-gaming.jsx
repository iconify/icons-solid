import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvjyl1y0k.css';
import '../../css/k/kh00onb1d.css';
import '../../css/n/ns0iphb9l.css';
import '../../css/k/k64spkeqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fvjyl1y0k"/><path class="kh00onb1d"/><path class="ns0iphb9l"/><path class="k64spkeqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chair-gaming"} {...others} />);
}

export default Component;
