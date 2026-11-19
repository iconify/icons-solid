import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbqwi2bvu.css';
import '../../css/y/yf-dpsb7n.css';
import '../../css/y/yn2rupbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbqwi2bvu"/><path class="yf-dpsb7n"/><path class="yn2rupbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio-9-16"} {...others} />);
}

export default Component;
