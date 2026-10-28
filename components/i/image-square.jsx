import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l354m-bjc.css';
import '../../css/l/le0bygb8o.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/d/dew-6vy3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l354m-bjc"/><rect class="le0bygb8o"/><path class="reyjw4bwg"/><path class="dew-6vy3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-square"} {...others} />);
}

export default Component;
