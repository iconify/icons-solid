import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lautcmbvg.css';
import '../../css/f/f2z3hkb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lautcmbvg"/><path class="f2z3hkb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sd-card"} {...others} />);
}

export default Component;
